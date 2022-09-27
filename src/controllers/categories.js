const categoriesService = require('../services/categories');

const register = async (req, res) => {
  const { name } = req.body;
  const add = await categoriesService.register(name);
  return res.status(201).json(add);
};

module.exports = { register };