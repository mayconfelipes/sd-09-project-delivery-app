const express = require('express');

const app = express();

//  Feito por Max - Apagar  //
const cors = require('cors');

app.use(cors());
//  Feito por Max //

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
