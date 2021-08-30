const express = require('express');
const mdwRegister = require('../middlewares/mdwRegister');

const pingRouter = express.Router();

pingRouter.post(
    '/',
    mdwRegister.verifyRegisteredUser,
    mdwRegister.registerUserInDB,
    mdwRegister.generateTokenRegister,
);

module.exports = pingRouter;