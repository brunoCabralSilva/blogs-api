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
      },
    );
  };

const getAllUsers = async () => {
  const query = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return query;
};

const getUserById = async (params) => {
  const id = Number(params);
  const query = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });
  return query;
};

module.exports = {
  verifyUser,
  register,
  getAllUsers,
  getUserById,
};