require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const path = require('path');
const errorMiddleware = require('../middlewares/errorMiddleware');
const usersRouter = require('../routes/userRouter');
const adminRouter = require('../routes/adminRouter');
const customerRouter = require('../routes/customerRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/customer', customerRouter);
app.use('/images', express.static(path.join(__dirname, '..', '..', 'images')));
app.use(errorMiddleware);

module.exports = app;
