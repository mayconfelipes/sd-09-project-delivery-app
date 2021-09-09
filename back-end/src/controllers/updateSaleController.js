const express = require('express');
const { mdwUpdateSatatus } = require('../middlewares/mdwUpdate');

const pingRouter = express.Router();

pingRouter.post('/status', mdwUpdateSatatus);

module.exports = pingRouter;