const { usersService } = require('../services');

module.exports = {
  async create(req, res, next) {
    try {
      const payload = req.body;
      const response = await usersService.create(payload);

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  },
};