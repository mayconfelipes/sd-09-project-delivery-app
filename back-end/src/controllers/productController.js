const productService = require('../services/productService');

const getAllProducts = async (req, res, next) => {
try {
  const products = await productService.getProductsAll();
  return res.status(200).json(products);
} catch (error) {
  return next(error);
}
};

// user_id: DataTypes.INTEGER,
// seller_id: DataTypes.INTEGER,
// total_price: DataTypes.DOUBLE,
// delivery_address: DataTypes.STRING,
// delivery_number: DataTypes.STRING,
// sale_date: DataTypes.DATE,
// status: DataTypes.STRING

const saveOrder = async (req, res, next) => {
  try {
    const { body: { user_id,
      seller_id,
      total_price,
      delivery_address,
      delivery_number,
      sale_date, 
      status } } = req;
    const order = await productService.saveOrder({ user_id,
      seller_id,
      total_price,
      delivery_address,
      delivery_number,
      sale_date,
      status });      
    return res.status(201).json(order);
  } catch (error) { return next(error); }
};

module.exports = {
  getAllProducts,
  saveOrder,
};
