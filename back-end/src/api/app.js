const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes');
const Middlewares = require('../middlewares');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes.RouteUser);
app.use('/', routes.RouteProduct);
app.use('/', routes.RouteSale);

app.use(Middlewares.errorMiddlewares);

module.exports = app;
