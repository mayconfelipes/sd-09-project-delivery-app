const Product = require('../services/ProductService');

const listProducts = async (_req, res) => {
  const products = await Product.getAll();

  return res.status(200).json(products);
};

const detailProducts = async (req, res) => {
  const { id } = req.params;

  const product = await Product.getById(id);

  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { productData } = req.body;
  const { file } = req;
  
  const newData = { ...productData, file }
  const newProduct = await Product.createNew(newData);

  return res.status(201).json(newProduct);
}
module.exports = {
  listProducts,
  detailProducts,
  createProduct,
};