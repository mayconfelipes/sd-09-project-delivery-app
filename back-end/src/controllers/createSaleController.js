const express = require("express");
const mdwSales = require("../middlewares/mdwSales");

const pingRouter = express.Router();

pingRouter.post("/sale", mdwSales.mdwCreateSale);
pingRouter.post("/sales-products", mdwSales.mdwCreateSalesProducts);

module.exports = pingRouter;
