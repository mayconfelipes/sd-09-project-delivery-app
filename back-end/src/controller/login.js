const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service');

router.post('/', rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await service.login(email, password);

  if (user.error) {
    return next({
      statusCode: 404,
      message: 'Not Found',
    });
  }
  
  return res.status(200).json(user);
}));

module.exports = router;
