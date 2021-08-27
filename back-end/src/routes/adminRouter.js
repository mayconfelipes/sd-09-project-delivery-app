const express = require('express');
const adminController = require('../controllers/adminController');

const adminRouter = express.Router();

adminRouter.post('/register', adminController.registerUser);

module.exports = adminRouter;
