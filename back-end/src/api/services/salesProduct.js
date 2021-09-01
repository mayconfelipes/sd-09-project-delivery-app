const { SalesProducts } = require('../../database/models');

const { messageError } = require('../middwares/errors');

const { SALE_PRODUCT_NOT_CREATED, SALE_PRODUCT_NOT_EXIST } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS, NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const create = async (saleProduct) => {
  const { saleId, productId, quantity } = saleProduct;

  const newSaleProduct = await SalesProducts.create({
    saleId,
    productId,
    quantity,
  });

  if (!newSaleProduct) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_PRODUCT_NOT_CREATED);
  }

  return newSaleProduct;
};

const getBySaleId = async (saleId) => {
  const products = await SalesProducts.findAll({ where: { saleId } });

  if (!products) {
    throw messageError(NOT_FOUND_STATUS, SALE_PRODUCT_NOT_EXIST);
  }
};

module.exports = {
  create,
  getBySaleId,
};