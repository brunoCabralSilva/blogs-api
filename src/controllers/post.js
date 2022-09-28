const postService = require('../services/post');
const decode = require('../utils/decode');

const getAll = async (req, res) => {
  const get = await postService.getAll();
  return res.status(200).json(get);
};

const getById = async (req, res) => {
  const get = await postService.getById(req.params.id);
  if (get === null) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
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

const deletePost = async (req, res) => {
  const dec = decode(req.headers.authorization);
  const del = await postService.deletePost(req.params.id, dec.id);
  if (del === 'not authorized') {
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }
  if (del === null) {
    return res.status(404).json({ message: 'Post does not exist' }); 
  }
  return res.status(204).json({ message: 'Post deleted successfully' }); 
};

module.exports = { getAll, getById, register, deletePost };