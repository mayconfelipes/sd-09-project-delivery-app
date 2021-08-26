require('dotenv').config();

const bodyParser = require('body-parser');

const registerController = require('../controllers/registerController');

const port = process.env.PORT || 3001;
const app = require('./app');

app.use(bodyParser.json());

app.post('/register', registerController.createUser);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(port);
console.log(`pai ta on na porta ${port}`);
