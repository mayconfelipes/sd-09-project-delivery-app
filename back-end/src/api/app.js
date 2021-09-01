const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { sendErrorMessage } = require('./middwares/errors');
const { products } = require('./controllers/products');
const usersControllers = require('./controllers/users');
const salesControllers = require('./controllers/sales');
const { validateToken } = require('./middwares/validators/validateToken');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.get('/products', products);

const validadeUserExists = require('./middwares/validators/validadeUserExists');
const login = require('../controllers/loginController');

app.post('/register', usersControllers.create);

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', validadeUserExists, login);

app.post('/sales', validateToken, salesControllers.create);

app.get('/sales/:id', validateToken, salesControllers.getById);

app.use(sendErrorMessage);

module.exports = app;
