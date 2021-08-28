const express = require('express');
const mdwLogin = require('../middlewares/mdwLogin');

const pingRouter = express.Router();

pingRouter.post('/', mdwLogin.userLogin);

module.exports = pingRouter;