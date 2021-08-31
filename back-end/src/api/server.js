const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const userController = require('./controllers/users');
const adminController = require('./controllers/admin');
const productController = require('./controllers/product');

const images = path.join(__dirname, '..', '..', 'public');
// const io = require('socket.io')(http, {
  //   cors: {
    //     origin: 'http://localhost:3000',
    //     methods: ['POST', 'GET'],
    //   },
// });

// require("./socket.io/server")(io);
// 1

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(images));

app.post('/login', userController.findUser);
app.post('/register', userController.registerUser);
app.post('/admin/register', adminController.registerUser);
app.get('/products', productController.getAllProducts);

http.listen(PORT, () => console.log('App listening on PORT %s', PORT));
