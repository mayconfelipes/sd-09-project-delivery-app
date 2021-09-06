const {
  statusCode: { OK },
} = require('../utils');
const { sellerOrders, saleDetails } = require('../services/sellerOrders');
const { createSale, createSalesProducts } = require('../services/createSale');
const {
  validatorJoi: { verifierSaleSchema, verifierSalesProductsSchema },
  getDate,
} = require('../utils');

const mdwSales = async (req, res, next) => {
  try {
    const { sellerId } = req.body;
    const orders = await sellerOrders(sellerId);
    return res.status(OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

const mdwSalesDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const salesAndProducts = await saleDetails(id);
    return res.status(OK).json(salesAndProducts);
  } catch (error) {
    return next(error);
  }
};

const mdwCreateSale = async (req, res, next) => {
  try {
    const { sellerId, userId, totalPrice, deliveryNumber, deliveryAddress } = req.body;
    const joiValidate = verifierSaleSchema({
      sellerId, userId, totalPrice, deliveryNumber, deliveryAddress,
    });

    if (joiValidate.error) return next(joiValidate.error);
    const saleDate = getDate();
    const status = 'pendente';
    const createdSale = await createSale(
      { sellerId, userId, totalPrice, deliveryNumber, deliveryAddress, status, saleDate },
      );
    return res.status(201).json(createdSale);
  } catch (error) {
    return next(error);
  }
};

const mdwCreateSalesProducts = async (req, res, next) => {
  try {
    const { productId, saleId, quantity } = req.body;

    const joiValidate = verifierSalesProductsSchema({
      productId,
      saleId,
      quantity,
    });
    if (joiValidate.error) return next(joiValidate.error);

    const createdSalesProducts = await createSalesProducts({
      productId,
      saleId,
      quantity,
    });
    return res.status(200).json(createdSalesProducts);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  mdwSales,
  mdwSalesDetails,
  mdwCreateSale,
  mdwCreateSalesProducts,
};
