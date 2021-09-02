const sellersServices = require('../services/sellers');

const getAllSellers = async (req, res) => {
  const sellers = await sellersServices.getAllSellers();
  console.log(sellers);
  return res.status(200).json(sellers);
};

module.exports = {
  getAllSellers,
}