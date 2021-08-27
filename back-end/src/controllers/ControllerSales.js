const ServiceSales = require('../services/ServiceSales');

const sale = async (req, res, next) => {
  try {
    const { totalPrice, deliveryNumber, deliveryAddress, name, products } = req.body;

    const { userId } = req.user;
    
    const newSale = await ServiceSales
      .sale({ userId, totalPrice, deliveryNumber, deliveryAddress, name, products });

    res.status(200).json(newSale);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sale,
};