const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const io = require('socket.io');
const http = require('http');
const ioStatus = require('./socket/status');

const app = express();

const httpServer = http.createServer(app);

app.use(cors());

const ioServer = io(httpServer, {
  cors: ({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
});

ioStatus(ioServer);

const { sendErrorMessage } = require('./middwares/errors');
const { products } = require('./controllers/products');
const usersControllers = require('./controllers/users');
const salesControllers = require('./controllers/sales');
const { validateToken } = require('./middwares/validators/validateToken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.get('/products', products);

const validadeUserExists = require('./middwares/validators/validadeUserExists');
const login = require('../controllers/loginController');

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', validadeUserExists, login);

app.post('/register', usersControllers.create);

app.get('/register', validateToken, usersControllers.getByRole);

app.get('/sale/id', validateToken, salesControllers.getSaleById);

app.get('/sale/:id', validateToken, salesControllers.getAllSalesById);

app.get('/sales/getAll', validateToken, salesControllers.getAllSales);

app.get('/sales/:id', validateToken, salesControllers.getAllById);

app.put('/sales/:id', validateToken, salesControllers.update);

app.post('/sales', validateToken, salesControllers.create);

// cria usuário pelo admin, podendo escolher o "role"
app.post('/users', validateToken, usersControllers.createByAdmin);

// Exclui o usuário pelo id
app.delete('/users/:id', validateToken, usersControllers.destroy);

// Entrega todos os usuários com nome, email e role
app.get('/users', validateToken, usersControllers.getAll);

app.use(sendErrorMessage);

module.exports = httpServer;
