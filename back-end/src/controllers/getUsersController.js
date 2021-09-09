const express = require('express');
const { mdwGetUsers, mdwGetAllUsers } = require('../middlewares/mdwGetUsers');

const pingRouter = express.Router();

pingRouter.get('/all', mdwGetAllUsers);
pingRouter.get('/:role', mdwGetUsers);

module.exports = pingRouter;