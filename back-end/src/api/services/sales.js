const { Sales, Products, Users } = require('../../database/models');
const salesProductsServices = require('./salesProduct');
const usersServices = require('./users');
const { messageError } = require('../middwares/errors');

const { 
  SALE_NOT_CREATED,
  SALE_NOT_EXIST,
  SALE_PRODUCT_NOT_CREATED, 
  SALE_NOT_UPDATED } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS, NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const getById = async (id) => {
  const sale = await Sales.findByPk(id);
  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
  return sale;
};

// retorna a venda pelo id dela mesma
const getSaleById = async (id) => {
  const sale = await Sales.findAll(
    { 
      logging: true,
      where: { userId: id },
      include: [
      { model: Products, as: 'products' },
      { model: Users, as: 'seller' }, 
    ] },
  );
  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
  return sale;
};

// retorna a venda pelo id dela mesma
const getAllSalesById = async (id) => {
  const sale = await Sales.findAll(
    { include: [
      { model: Products, as: 'products' },
      { model: Users, as: 'seller' }, 
    ] },
    { where: { id } }, 
  );
  if (!sale) {
    throw messageError(NOT_FOUND_STATUS, SALE_NOT_EXIST);
  }
  return sale;
};

// Pega todas as vendas pelo id do usuário
const getAllById = async (id) => {
  const sale = await Sales.find({ where: { id } });

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

const create = async (sale, id) => {
  const { seller, products } = sale;

  const saleSeller = await usersServices.getById(seller);

  const newSale = await Sales.create({ userId: id, 
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

  return fullSale.dataValues;
};

const update = async (id, status) => {
  const updateSale = await Sales.update(
    { 
      status,
    },
    { where: { id } },
);

  if (!updateSale) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_NOT_UPDATED);
  }

  const fullSale = await getById(id);

  return fullSale;
};
// // Busca todas as vendas
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

module.exports = {
  create,
  getSaleById,
  update,
  getAllById,
  getAllSales,
  getAllSalesById,
};
