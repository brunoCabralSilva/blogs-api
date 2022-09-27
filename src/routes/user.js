const express = require('express');
const userController = require('../controllers/user');
const mid = require('../middlewares/user');

const router = express.Router();

router.post('/',
  mid.VdisplayName,
  mid.Vemail,
  mid.Vpassword,
  userController.register);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

module.exports = router;