const express = require('express');
const mid = require('../middlewares/categories');
const categoriesControl = require('../controllers/categories');

const router = express.Router();

router.post('/', mid.vName, categoriesControl.register);
router.get('/', categoriesControl.getAllCategories);

module.exports = router;