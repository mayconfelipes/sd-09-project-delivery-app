const { SalesProduts } = require('../../database/models');

const { messageError } = require('../middwares/errors');

const { SALE_PRODUCT_NOT_CREATED } = require('../middwares/errorMessages');

const { INTERNAL_ERROR_STATUS } = require('../middwares/httpStatus');

const create = async (saleProduct) => {
  const { saleId, productId, quantity } = saleProduct;

  const newSaleProduct = await SalesProduts.create({
    saleId,
    productId,
    quantity,
  });

  if (!newSaleProduct) {
    throw messageError(INTERNAL_ERROR_STATUS, SALE_PRODUCT_NOT_CREATED);
  }

  return newSaleProduct;
};

module.exports = {
  create,
};