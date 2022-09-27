const { Category } = require('../models');
const register = async (name) => {
  await Category.create({ name });
  const add = await Category.findOne({
    where: { name }
  });
  return add.dataValues;
}

module.exports = { register };