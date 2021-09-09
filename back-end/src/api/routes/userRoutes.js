const express = require('express');
const userController = require('../controllers/userController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const userRouter = express.Router();

userRouter.get('/', jwtValidate, userController.listUsers);
userRouter.get('/byrole/:role', jwtValidate, userController.listUsersBRole);
userRouter.post('/', jwtValidate, userController.createUser);
userRouter.delete('/:id', jwtValidate, userController.deleteUser);

module.exports = userRouter;
