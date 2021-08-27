const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const { User } = require('../database/models');

router.post('/', rescue(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email, password } });

  if (user.length === 0) {
    next({
      statusCode: 404,
      message: 'Not Found',
    });
  }
}));

// router.get('/', (req, res) => {
//   return res.status(200).json({
//     message: 'chegou',
//   });
// });

module.exports = router;
