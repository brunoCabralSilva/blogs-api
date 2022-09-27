const { User } = require('../models');

const verifyUser = async (email) => {
  const query = await User.findOne({
    attributes: ['email'],
    where: { email },
  });
  return query;
};

const register = async ({ displayName, email, password, image }) => {
await User.create(
  { 
    displayName,
    email,
    password,
    image,
  }
);
};

module.exports = { verifyUser, register };