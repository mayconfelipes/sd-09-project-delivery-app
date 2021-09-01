const { sales } = require("../../database/models");

const getAll = async () => {
  const allSales = await sales.findAll();
  return allSales;
};

const getById = async id => {
  const sale = await sales.findOne({
    where: { id }
  });
  return sale;
};

module.exports = {
  getAll,
  getById
};
