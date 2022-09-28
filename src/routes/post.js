const express = require('express');
const authentication = require('../middlewares/authentication');
const mid = require('../middlewares/post');
const postControl = require('../controllers/post');

const router = express.Router();

router.post('/', authentication, mid.vData, postControl.register);
router.get('/', authentication, postControl.getAll);
router.get('/:id', authentication, postControl.getById);


module.exports = router;