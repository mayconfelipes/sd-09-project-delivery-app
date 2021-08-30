const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { validJWT } = require('../middlewares');

router.post('/sales', validJWT, ControllerSales.sale);

module.exports = router;