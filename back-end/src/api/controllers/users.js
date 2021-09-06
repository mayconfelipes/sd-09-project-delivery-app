const { usersService } = require('../services');
const { PermissionError } = require('../errors');

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
  async getAll(req, res, next) {
    try {
      const { role: userRole } = req.user;

      if (!['administrator', 'customer'].includes(userRole)) {
        throw new PermissionError('Operation not allowed');
      }

      const response = await usersService.getAll();

      if (userRole === 'customer') {
        res.status(200).json(response.filter(({ role }) => role === 'seller'));
      } else {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  },
  async remove(req, res, next) {
    try {
      const { role } = req.user;

      if (role !== 'administrator') {
        throw new PermissionError('Operation not allowed');
      }

      const { id } = req.params;
      await usersService.remove(id);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};