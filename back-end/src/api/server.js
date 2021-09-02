require('dotenv').config();

const bodyParser = require('body-parser');

const tokenValidController = require('../controllers/tokenValidController');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const sellerController = require('../controllers/sellerController');

const port = process.env.PORT || 3001;
const app = require('./app');

app.use(bodyParser.json());

app.post('/register', registerController.createUser);

app.post('/login', loginController.newLogin);

app.get('/products', tokenValidController.checkUser, productsController.getAll);
app.get('/images/:path', productsController.getImage);

app.get('/sellers', sellerController.allSellers);

app.post('/sale', tokenValidController.checkUser, salesController.create);
app.get('/sale', tokenValidController.checkUser, salesController.findAll);
app.get('/sale/:id', tokenValidController.checkUser, salesController.getById);
app.put('/sale/status', tokenValidController.checkUser, salesController.updateSaleStatus);

app.use((err, _req, res, _next) => {
  console.log(err);
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(port);

console.log(`pai ta on na porta ${port}`);
