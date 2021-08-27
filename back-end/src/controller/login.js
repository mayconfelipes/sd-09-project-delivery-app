const express = require('express');
const service = require('../service/login');

const router = express.Router();

router.post('/', async (req, res, _next) => {
  const user = await service.login(req.body);

  if (user.error) {
    return res.status(404).json(user.error);
  }

  return res.status(200).json(user);
});

module.exports = router;
