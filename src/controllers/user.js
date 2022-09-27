const userService = require('../services/user');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  const { email } = req.body;
  const verify = await userService.verifyUser(email);
  if (verify !== null) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  await userService.register(req.body);
  const token = generateToken(req.body);
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const get = await userService.getAllUsers();
  return res.status(200).json(get);
};

const getUserById = async (req, res) => {
  const get = await userService.getUserById(req.params.id);
  if (get === null) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
  return res.status(200).json(get);
};

module.exports = { register, getAllUsers, getUserById };