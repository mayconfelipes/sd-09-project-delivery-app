const { sales } = require('../../database/models');

const getAll =  async () => {
  const allSales = await sales.findAll();
 return allSales;
};

module.exports = {
  getAll,
}