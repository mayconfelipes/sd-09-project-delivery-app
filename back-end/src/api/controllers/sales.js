const  salesService  = require('../services/sales');

const getAll =  async (req, res) => {
  const allSales = await salesService.getAll();
 console.log(JSON.parse(JSON.stringify(allSales)));
 res.status(201).send(allSales);
};

module.exports = {
  getAll,
}