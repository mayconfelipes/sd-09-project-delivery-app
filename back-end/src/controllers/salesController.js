const salesService = require('../services/salesService');

const create = async (req, res, next) => {
  try {
    const newSale = await salesService.create(req.body);
    return res.status(201).json({ saleId: newSale });
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findSale = await salesService.findByPk(id);
    return res.status(200).json(findSale);
  } catch (error) {
    return next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const products = await salesService.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

const updateSaleStatus = async (req, res, next) => {
  try {
    const updatedStatus = await salesService.updateStatus(req.body);

    return res.status(200).json({ message: updatedStatus });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getById,
  findAll,
  updateSaleStatus,
};
