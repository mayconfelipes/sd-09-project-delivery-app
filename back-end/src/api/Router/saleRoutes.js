const express = require('express');
const Sale = require('../../controllers/Sale');
const { validateToken } = require('../../middlewares');

const router = express.Router();

router.post('/', [validateToken, Sale.register]);
router.put('/:id', [validateToken, Sale.update]);
router.get('/', [Sale.getAll]);
router.get('/byUserId/:userId', [Sale.findAllByUserId]);
router.get('/bySellerId/:sellerId', [Sale.findAllBySellerId]);
router.get('/:id', [Sale.findSaleById]);

module.exports = router;
