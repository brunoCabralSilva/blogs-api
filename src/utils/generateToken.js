const tokenSecret = process.env.JWT_SECRET || 'Isopotematemutninagai619';
const jwt = require('jsonwebtoken');

const generateTolkien = ({ id, displayName, email }) => {
  const payload = {
    id,
    displayName,
    email,
  };

  const jwtConfig = {
    expiresIn: '10min',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, tokenSecret, jwtConfig);

  return token;
};

module.exports = generateTolkien;