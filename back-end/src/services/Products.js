const { products } = require('../database/models');

const getAll = async () => {
  const blogPosts = await products.findAll();
  return blogPosts;
};

module.exports = getAll;
