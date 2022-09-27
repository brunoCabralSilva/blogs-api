const jwt = require('jsonwebtoken');

const tokenSecret = process.env.JWT_SECRET || 'Isopotematemutninagai619';

const authentication = (token) => {
  try {
  const validate = jwt.verify(token, tokenSecret);
  return validate;
  } catch (error) {
    return false;
  }
};

module.exports = { authentication };