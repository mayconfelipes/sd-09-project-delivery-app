const express = require('express');
const { mdwGetUsers } = require('../middlewares/mdwGetUsers');

const pingRouter = express.Router();

pingRouter.get('/:role', mdwGetUsers);

module.exports = pingRouter;