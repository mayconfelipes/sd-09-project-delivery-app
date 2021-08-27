const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./controllers/users');

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

app.post('/login', userController.findUser);
app.post('/register', userController.registerUser);

http.listen(PORT, () => console.log('App listening on PORT %s', PORT));
