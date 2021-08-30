const { Product } = require('../database/models');

const findAll = async () => {
  const products = await Product.findAll();

  return products
    .map(({ dataValues: { id, name, price, url_image } }) => ({
      id,
      name,
      price,
      urlImage: url_image,
    }));
};

const findById = async (id) => {
  const product = Product.findByPk(id);

  return product;
};

module.exports = {
  findAll,
  findById,
};