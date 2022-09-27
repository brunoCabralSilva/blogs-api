const express = require('express');
const userController = require('../controllers/user');
const mid = require('../middlewares/user');
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.post('/',
  mid.VdisplayName,
  mid.Vemail,
  mid.Vpassword,
  userController.register);

router.get('/', authentication, userController.getAllUsers);

router.get('/:id', authentication, userController.getUserById);

module.exports = router;