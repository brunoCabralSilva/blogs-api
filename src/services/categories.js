const { Category } = require('../models');

const register = async (name) => {
  await Category.create({ name });
  const add = await Category.findOne({
    where: { name },
  });
  return add.dataValues;
};

const getAllCategories = async () => {
  const query = await Category.findAll();
  return query;
};

module.exports = { register, getAllCategories };