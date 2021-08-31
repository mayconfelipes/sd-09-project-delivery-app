const express = require('express');

const router = express.Router();

const ControllerUsers = require('../controllers/ControllerUsers');
const Middlewares = require('../middlewares');

router.post('/login', Middlewares.validLogin, ControllerUsers.login);
router.post('/register', Middlewares.validRegister, ControllerUsers.register);
router.post(
  '/admin/register',
  Middlewares.validJWT,
  Middlewares.validRegisterAdmin,
  ControllerUsers.registerAdmin,
);
router.get('/users', Middlewares.validJWT, ControllerUsers.getAllUsers);
router.get('/seller', ControllerUsers.getAllSellers);

module.exports = router;