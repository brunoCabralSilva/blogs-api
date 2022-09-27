const { User } = require('../models');

const authService = async ({ email, password }) => {
  const query = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password', 'image'],
    where: { email, password },
  });
  return query;
};

module.exports = { authService };