const { loginService } = require('../services');

module.exports = (req, res, next) => {
  try {
    const payload = req.body;
    const response = loginService(payload);

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};