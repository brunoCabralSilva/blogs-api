const userService = require('../services/user');
const generateToken = require('../utils/generateToken');
const decode = require('../utils/decode');

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

const deleteUser = async (req, res) => {
  const dec = decode(req.headers.authorization);
  const del = await userService.deleteUser(dec.id);
  if (del) {
    return res.status(204).json({ message: 'User deleted successfully' });
  }
  
  return res.status(400).json({ message: 'Internal Error' });
};

module.exports = { register, getAllUsers, getUserById, deleteUser };