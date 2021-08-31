const { Product } = require('../../database/models');

module.exports = {
  async findAll() {
    const products = await Product.findAll();

    return { products };
  },
};
