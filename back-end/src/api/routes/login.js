const router = require('express').Router();

const { loginController } = require('../controllers');

router.post('/', loginController);

module.exports = router;
