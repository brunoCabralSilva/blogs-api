const categoriesService = require('../services/categories');

const register = async (req, res) => {
  const { name } = req.body;
  const add = await categoriesService.register(name);
  return res.status(201).json(add);
};

const getAllCategories = async (req, res) => {
  const list = await categoriesService.getAllCategories();
  return res.status(200).json(list);
};

module.exports = { register, getAllCategories };