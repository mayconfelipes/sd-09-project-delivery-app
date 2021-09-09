const express = require('express');

const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const loginRoute = require('../routes/loginRoute');
const allSellers = require('../routes/allSellers');
const registerRoute = require('../routes/registerRoute');
const productRoute = require('../routes/productRoute');
const saleRoute = require('../routes/saleRoute');
const sellerRoute = require('../routes/sellerRoute');
const adminRoute = require('../routes/adminRoute');

const errorMiddleware = require('../utils/errorMiddleware');
const authMiddleware = require('../database/services/jwt/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);
app.use('/customer', authMiddleware, saleRoute);
app.use('/allsellers', authMiddleware, allSellers);
app.use('/seller', authMiddleware, sellerRoute);
app.use('/admin', authMiddleware, adminRoute);

app.use(express.static(path.join(__dirname, '../', '../', 'public')));

app.use(errorMiddleware);

module.exports = app;
