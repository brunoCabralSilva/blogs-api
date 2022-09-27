const login = require('../services/login');
const generateToken = require('../utils/generateToken');

const authController = async (req, res) => {
  const { email, password } = req.body;
  const authentication = await login.authService(req.body);

  if (email === '' || password === '') {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  } 
  
  if (authentication === null) {
    return res.status(400).json({ message: 'Invalid fields' });  
  }

  const token = generateToken(authentication);
  return res.status(200).json({ token });
};

module.exports = { authController };