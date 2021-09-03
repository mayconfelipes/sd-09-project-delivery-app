const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service');
const validateJwt = require('../middlewares/validateJwt');

router.post('/', rescue(async (req, res, next) => {
  const user = await service.login(req.body);

  if (user.error) {
    return next({
      statusCode: 404,
      message: 'Not Found',
    });
  }
  return res.status(200).json(user);
}));

router.get('/', [
  validateJwt,
  rescue(async (_req, res, _next) => res.status(200).json(res.user)),
]);

module.exports = router;
