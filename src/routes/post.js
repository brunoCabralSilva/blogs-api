const express = require('express');
const authentication = require('../middlewares/authentication');
const mid = require('../middlewares/post');
const postControl = require('../controllers/post');

const router = express.Router();

router.post('/',
  authentication,
  mid.vTitle,
  mid.vContent,
  mid.vCategoryIds,
  postControl.register);
router.get('/', authentication, postControl.getAll);
router.get('/:id', authentication, postControl.getById);
router.delete('/:id', authentication, postControl.deletePost);

module.exports = router;