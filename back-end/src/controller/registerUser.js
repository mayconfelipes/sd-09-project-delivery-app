const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service/registerUser');
const validateUser = require('../middlewares/validateUser');

router.post('/', [
  validateUser,
  rescue(async (req, res, _next) => {
    await service.registerUser(req.body);

    return res.status(201).json({ message: 'Created' });
  }),
]);

module.exports = router;
