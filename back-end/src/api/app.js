const express = require('express');
const router = require('../controllers/routes/router');
const mdwError = require('../middlewares/mdwError');

const app = express();

app.use(express.json());

app.use(router);
app.use(mdwError.errorMiddleware);

module.exports = app;
