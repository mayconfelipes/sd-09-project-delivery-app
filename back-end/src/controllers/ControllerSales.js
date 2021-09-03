const ServiceSales = require('../services/ServiceSales');

const sale = async (req, res, next) => {
  try {
    const { totalPrice, deliveryNumber, deliveryAddress, name, products } = req.body;

    const { id: userId } = req.user;
    
    const newSale = await ServiceSales
      .sale({ userId, totalPrice, deliveryNumber, deliveryAddress, name, products });

    res.status(200).json(newSale);
  } catch (error) {
    next(error);
  }
};

const getSalesByUserId = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    let userId;
    let sellerId;
    if (role === 'customer') userId = id;
    if (role === 'seller') sellerId = id;

    const sales = await ServiceSales.getSalesByUserId({ userId, sellerId });
    
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

const getSalesBySaleId = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { saleId } = req.params;

    const sales = await ServiceSales.getSalesBySaleId({ saleId, userId });
    
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sale,
  getSalesByUserId,
  getSalesBySaleId,
};