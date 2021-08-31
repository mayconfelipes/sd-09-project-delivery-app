const { Sales } = require('../../database/models');
const salesProductsServices = require('./salesProduct');
const usersServices = require('./users');
const { messageError } = require('../middwares/errors');

const { SALE_NOT_CREATED, SALE_NOT_EXIST } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS, NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const createProducts = async (saleId, products) => {
  const productsSale = [];
  products.forEach((produtc) => {
    const { productId, quantity } = produtc;

    const newProductSale = salesProductsServices.create({
      saleId,
      productId,
      quantity,

    });

    productsSale.push(newProductSale);
  });

  return productsSale;
};

const create = async (sale, login) => {
  const { seller, totalPrice, deliveryAddress, deliveryNumber, status, products } = sale;
  const { name } = login;

  const saleUser = await usersServices.getByName(name);
  const saleSeller = await usersServices.getByName(seller);

  const newSale = await Sales.create({
    userId: saleUser.id,
    sellerId: saleSeller.id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });

  if (!newSale) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_NOT_CREATED);
  }
  
  const newProductsSale = await createProducts(saleUser.id, products);

  return ({ newSale, products: newProductsSale });
};

const getById = async (id) => {
  const sale = await Sales.findByPk(id);

  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
};

module.exports = {
  create,
  getById,
};