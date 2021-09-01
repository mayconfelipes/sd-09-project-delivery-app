const { Product } = require('../../database/models');

module.exports = {
  async findAll() {
    const products = await Product.findAll();
    const copia = [...products].slice(0);
    return copia;
  },
};
