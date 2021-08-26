const express = require('express');

const loginRouter = express.Router();
loginRouter.get('/',(req, res) => {
  res.status(200).send("Estamos na rota de /login");
});

module.exports = {
  loginRouter,
}