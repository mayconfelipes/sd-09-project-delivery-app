require('dotenv').config();

const bodyParser = require('body-parser');

// validação de token para usuario e administrador  - aguardando uso
const tokenValidController = require('../controllers/tokenValidController');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const productsController = require('../controllers/productsController');

const port = process.env.PORT || 3001;
const app = require('./app');

app.use(bodyParser.json());

app.post('/register', registerController.createUser);

app.post('/login', loginController.newLogin);

app.get('/products', tokenValidController.checkUser, productsController.getAll);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(port);
console.log(`pai ta on na porta ${port}`);
