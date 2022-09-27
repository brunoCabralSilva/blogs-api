const jwt = require('jsonwebtoken');
const auth = require('../utils/authentication');

const authentication = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const validate = auth.authentication(req.headers.authorization);

  if (validate === "jwt malformed") {
    return res.status(401).json({ message: 'Expired or invalid token' });
  };
  next();
};

module.exports = authentication;