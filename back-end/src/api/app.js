const express = require('express');
const bodyParser = require('body-parser').json();
const path = require('path');
const cors = require('cors');
const router = require('./router/router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser);

const options = {
  origin: 'http://localhost:3000',
};

app.use(cors(options));

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);

app.use(errorHandler);

module.exports = app;
