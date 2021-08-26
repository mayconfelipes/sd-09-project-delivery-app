const express = require('express');
const pingController = require('../pingController');

const router = express.Router();

router.use('/ping', pingController);

module.exports = router;