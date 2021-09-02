const express = require('express');
const Sale = require('../../controllers/Sale');
const { validateToken } = require('../../middlewares');

const router = express.Router();

router.post('/', [validateToken, Sale.register]);
router.put('/', [validateToken, Sale.update]);
router.get('/byUserId', [Sale.findByUserId]);

module.exports = router;
