const routes = require('express').Router();
const rescue = require('express-rescue');
const logins = require('./controllers/loginController');
const users = require('./controllers/userController');
const images = require('./controllers/imageController');

routes.post('/login', rescue(logins.login));

routes.post('/user', rescue(users.create));
routes.get('/user', rescue(users.findAll));

routes.get('/images/:image', rescue(images.getImage));

module.exports = routes;