const jwt = require('jsonwebtoken');

const tokenSecret = process.env.JWT_SECRET || 'Isopotematemutninagai619';

const decode = (token) => {
  const validate = jwt.verify(token, tokenSecret);
  return validate;
};

module.exports = decode;