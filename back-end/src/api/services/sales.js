const { Sales, Products, Users } = require('../../database/models');
const salesProductsServices = require('./salesProduct');
const usersServices = require('./users');
const { messageError } = require('../middwares/errors');

const { 
  SALE_NOT_CREATED,
  SALE_NOT_EXIST,
  SALE_PRODUCT_NOT_CREATED } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS, NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const getById = async (id) => {
  const sale = await Sales.findByPk(id);

  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }

  return sale;
};

// Busca vendas pelo id do usuário logado
const getByUser = async (id) => {
  const userId = id;
  const sale = await Sales.findAll(
    { include: [
      { model: Products, as: 'products' },
      { model: Users, as: 'seller' }, 
    ] },
    { where: { userId } }, 
  );
  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
  return sale;
};

// Busca todas as vendas
const getAllSales = async () => {
  const sale = await Sales.findAll(
    { include: [
      { model: Products, as: 'products' },
      { model: Users, as: 'seller' }, 
    ] }, 
  );
  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
  return sale;
};

const createProducts = async (saleId, products) => {
  products.forEach((product) => {
    const { productId, quantity } = product;

    const newProductSale = salesProductsServices.create({
      saleId,
      productId,
      quantity,

    });
    if (!newProductSale) {
      throw messageError(INTERNAL_ERROR_STATUS, SALE_PRODUCT_NOT_CREATED);
    }
  });
};

const create = async (sale, login) => {
  const { seller, products } = sale;
  const { name } = login.data;

  const saleUser = await usersServices.getByName(name);

  const saleSeller = await usersServices.getByName(seller);

  const newSale = await Sales.create({ userId: saleUser.id, 
    sellerId: saleSeller.id,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    status: 'Pendente',
  });

  if (!newSale) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_NOT_CREATED);
  }

  await createProducts(newSale.id, products);

  const fullSale = await getById(newSale.id);

  return fullSale;
};

module.exports = {
  create,
  getById,
  getByUser,
  getAllSales,
};