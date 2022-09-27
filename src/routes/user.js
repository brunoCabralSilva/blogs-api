const express = require('express');
const userController = require('../controllers/user');
const mid = require('../middlewares/user');

const router = express.Router();

router.post('/',
  mid.displayName,
  mid.email,
  mid.password,
  userController.register
);

module.exports = router;