const express = require('express');
const { salesProducts, sales, products, users } = require('../database/models');


const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/teste', async (_req, res) => {
    const product_id = 1
    const sale_id = 1
    const quantity = 2

    const teste = await salesProducts.create({ product_id, sale_id, quantity });

    res.status(200).json(teste)
});

module.exports = app;
