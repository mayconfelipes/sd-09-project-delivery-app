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
  async getAll(req, res, next) {
    try {
      const { id: userId, role } = req.user;

      const response = await salesService.getAll(userId, role);

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
  async update(req, res, next) {
    try {
      const payload = req.body;
      const { id } = req.params;
      const response = await salesService.update({ id, ...payload });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  },
};