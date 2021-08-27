const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service/login');

router.post('/', rescue(async (req, res, next) => {
  const user = await service.login(req.body);

  if (!user.length) {
    return next({
      statusCode: 404,
      message: 'Not Found',
    });
  }
  return res.status(200).json(user);
}));

// router.get('/', (req, res) => {
//   return res.status(200).json({
//     message: 'chegou',
//   });
// });

module.exports = router;
