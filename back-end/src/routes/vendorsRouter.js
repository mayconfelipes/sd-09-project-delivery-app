const express = require('express');

const vendorsRouter = express.Router();

const vendorsController = require('../controllers/vendorsController');
// const validateToken = require('../middlewares/validateJWT');

vendorsRouter.get('/', vendorsController.getAllVendors);

module.exports = vendorsRouter;
