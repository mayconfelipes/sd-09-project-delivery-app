const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service/registerUser');

router.post('/', rescue(async (req, res, _next) => {
  await service.registerUser(req.body);

  return res.status(201).json({ message: 'Created' });
}));

module.exports = router;
