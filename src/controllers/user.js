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

module.exports = { register };