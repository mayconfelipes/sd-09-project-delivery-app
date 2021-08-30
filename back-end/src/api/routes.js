const routes = require('express').Router();
const rescue = require('express-rescue');
const logins = require('./controllers/loginController');
const users = require('./controllers/userController');

routes.post('/login', rescue(logins.login));

routes.post('/user', rescue(users.create));
routes.get('/user', rescue(users.findAll));

module.exports = routes;