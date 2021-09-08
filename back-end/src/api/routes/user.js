const express = require('express');
const User = require('../controllers/user');
const JoiValidate = require('../middlewares/JoiValidate');
const { register, user } = require('../utils/JoiSchemas');
const validate = require('../middlewares/validators');

const route = express.Router();

route.post('/register', JoiValidate(register), validate.userExists, User.create);

route.use(validate.token);

route.post('/', JoiValidate(user), validate.admin, validate.userExists, User.create);
route.get('/', User.findAll);
route.get('/:id', User.findOne);
route.put('/:id', JoiValidate(user), User.update);
route.delete('/:id', User.destroy);

module.exports = route;
