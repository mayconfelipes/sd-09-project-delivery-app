const { salesService } = require('../services');

module.exports = {
  async create(req, res, next) {
    try {
      const payload = req.body;
      const response = await salesService.create(payload);

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  },
  async getAll(_req, res, next) {
    try {
      const response = await salesService.getAll();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  },
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await salesService.getById(id);

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  },
};