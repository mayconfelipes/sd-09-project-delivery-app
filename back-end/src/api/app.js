require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

const deliveryAppSocket = require('../socket/deliveryAppSocket');

deliveryAppSocket.deliveryAppSocket(io);

const errorMiddleware = require('../middlewares/errorMiddleware');
const usersRouter = require('../routes/userRouter');
const adminRouter = require('../routes/adminRouter');
const customerRouter = require('../routes/customerRouter');
const salesRouter = require('../routes/salesRouter');
const vendorsRouter = require('../routes/vendorsRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/customer', customerRouter);
app.use('/sales', salesRouter);
app.use('/vendors', vendorsRouter);

app.use('/images', express.static(path.join(__dirname, '..', '..', 'images')));
app.use(errorMiddleware);

const PORT = process.env.SOCKET_PORT || 3002;

httpServer.listen(PORT, () => {
  console.log(`Socket online on port: ${PORT}`);
});

module.exports = app;
