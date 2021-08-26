const express = require('express');
const mdwPing = require('../middlewares/mdwPing');

const pingRouter = express.Router();

pingRouter.get('/', mdwPing.pingPong);

module.exports = pingRouter;