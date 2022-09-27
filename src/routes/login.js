const express = require('express');
const login = require('../controllers/login');

const router = express.Router();

router.post('/', login.authController);

module.exports = router;