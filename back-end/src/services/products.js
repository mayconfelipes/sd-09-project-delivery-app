const { products } = require('../database/models');

const productsArraySerialize = (productsList) => {
  const dataSerialized = productsList.map((product) =>
  ({
    id: product.id,
    price: product.price,
    nameAndQuantityInMl: product.name,
    thumbNail: product.url_image,
  }));
  return dataSerialized;
};

const findAllProducts = async (_name, _email) => {
  const dataProducts = await products.findAll();
  if (!dataProducts) return '';
  return productsArraySerialize(dataProducts);
};

module.exports = {
  findAllProducts,
};
