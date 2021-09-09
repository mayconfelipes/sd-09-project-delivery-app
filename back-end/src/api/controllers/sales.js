const { CREATED_STATUS, OK_STATUS } = require('../middwares/httpStatus');
const salesServices = require('../services/sales');

const create = async (req, res, next) => {
  try {
    const sale = req.body;
    const { id } = req.user.data;
    const newSale = await salesServices.create(sale, id);
    return res.status(CREATED_STATUS).json(newSale);
  } catch (err) {
    next(err);
  }
};

// RETORNA A VENDA BUSCANDO PELO ID
const getAllById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await salesServices.getAllById(id);

    return res.status(OK_STATUS).json(sale);
  } catch (err) {
    next(err);
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const { id } = req.user.data;
    const sale = await salesServices.getSaleById(id);

    return res.status(OK_STATUS).json(sale);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = req.body;

    const updateSale = await salesServices.update(id, sale);

    return res.status(OK_STATUS).json(updateSale);
  } catch (err) {
    next(err);
  }
};

// RETORNA TODAS AS VENDAS DO BANCO
const getAllSales = async (req, res, next) => {
  try {
    const sale = await salesServices.getAllSales();
    return res.status(OK_STATUS).json(sale);
  } catch (err) {
    next(err);
  }
};

const getAllSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await salesServices.getAllSalesById(id);

    return res.status(OK_STATUS).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAllById,
  getSaleById,
  update,
  getAllSalesById,
  getAllSales,
};
