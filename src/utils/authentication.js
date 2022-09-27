const jwt = require('jsonwebtoken');
const tokenSecret = process.env.JWT_SECRET || 'Isopotematemutninagai619';

const authentication = (token) => {
  try {
  const validate = jwt.verify(token, tokenSecret);
  return validate;
  } catch(error) {
    const status = 401;
    const message = 'jwt malformed';
    return message;
  }
};

module.exports = { authentication };