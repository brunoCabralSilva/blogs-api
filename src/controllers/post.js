const postService = require('../services/post');
const decode = require('../utils/decode');

const getAll = async (req, res) => {
  const get = await postService.getAll();
  return res.status(200).json(get);
};

const getById = async (req, res) => {
  const get = await postService.getById(req.params.id);
  return res.status(200).json(get);
};

const register = async (req, res) => {
  const dec = decode(req.headers.authorization);
  try {
    const reg = await postService.register(req.body, dec.id);
    return res.status(201).json(reg);
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = { getAll, getById, register };