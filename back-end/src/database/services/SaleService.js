const { Sale } = require('../models');

const getAll = async () => {
  const sale = await Sale.findAll({ include: { association: 'user' } });

  return sale;
};

module.exports = {
  getAll,
};