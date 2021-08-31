const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
app.use('/api', routes);
app.use(middlewares.errorTreatment);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
