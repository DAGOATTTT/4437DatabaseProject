const express = require('express');
const router = express.Router();
const {createuser} = require('../controllers/UserController');

router.post('/', createuser);


module.exports = router;