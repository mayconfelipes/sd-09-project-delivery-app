const productService = require('../services/productService');

const getAllProducts = async (req, res, next) => {
try {
  const products = await productService.getProductsAll();
  return res.status(200).json(products);
} catch (error) {
  return next(error);
}
};

const saveOrder = async (req, res, next) => {
  try {
    const { orderData, listItens } = req.body;
    const orderId = await productService.saveOrder({ orderData });
    await productService.createSalesProducts(orderId, listItens);
    return res.status(201).json(orderId);
  } catch (error) { return next(error); }
};

module.exports = {
  getAllProducts,
  saveOrder,
};
