const express = require('express');
const User = require('../controllers/user');
const JoiValidate = require('../middlewares/JoiValidate');
const { login } = require('../utils/JoiSchemas');

const route = express.Router();

route.post('/', JoiValidate(login), User.login);

module.exports = route;
