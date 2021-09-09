const express = require('express');
const bodyParser = require('body-parser').json();
const cors = require('cors');

const app = express();

app.use(cors());

const Router = require('./Router');
const { handleError } = require('../middlewares');

app.use(bodyParser);
app.use(express.static('public')); 

app.use('/user', Router.userRoutes);
app.use('/product', Router.productRoutes);
app.use('/sale', Router.saleRoutes);

app.use(handleError);

module.exports = app;
