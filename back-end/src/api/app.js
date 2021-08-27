const express = require('express');
const cors = require('cors');
const router = require('../controllers/routes/router');
const mdwError = require('../middlewares/mdwError');

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(mdwError.errorMiddleware);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
