const { productsService } = require('../services');

module.exports = {
  async getAll(_req, res, next) {
    try {
      const response = await productsService.findAll();

      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};
