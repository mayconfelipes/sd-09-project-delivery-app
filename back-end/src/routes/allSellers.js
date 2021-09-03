const express = require('express');
const UserController = require('../database/controllers/UserController');

const router = express.Router();

router.get('/', UserController.sellers);

module.exports = router;
