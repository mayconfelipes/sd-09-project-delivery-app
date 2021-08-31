const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes');
const erroMiddleware = require('../middlewares/error');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../../public`));

app.use('/login', routes.Login);

app.use('/users', routes.Users);

app.use('/sales', routes.Sales);

app.use('/products', routes.Products);

app.use('/sales-products', routes.SalesProducts);

app.use(erroMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
