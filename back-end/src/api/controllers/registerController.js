const express = require('express');
const rescue = require('express-rescue');

const registerService = require('../services/registerService');
const registerValidator = require('../middlewares/registerValidator'); 
const { created } = require('../utils/httpStatusCodes');

const registerController = express.Router();

registerController.post('/', registerValidator, rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  
  const { error, createdUser } = await registerService.register(name, email, password, role);

  if (error) {
    return next(error);
  }

  return res.status(created).json(`Usuário ${createdUser.dataValues.name} criado com sucesso`);
}));

module.exports = registerController;
