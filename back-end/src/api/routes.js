const routes = require('express').Router();
const logins = require('./controllers/loginController');
const users = require('./controllers/userController');

routes.post('/login', logins.login);

routes.get('/user', users.findAll);

module.exports = routes;