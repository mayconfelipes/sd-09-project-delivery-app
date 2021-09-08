const orderStatus = (io) => {
  io.on('connection', (socket) => {
    console.log('nova conexão' + socket.id);
    socket.on('deliveredOrder', () => {
      io.emit('deliveredOrder');
    });
    socket.on('acceptOrder', () => {
      io.emit('acceptOrder');
    });
    socket.on('deliverOrder', () => {
      io.emit('deliverOrder');
    });
  });
};

module.exports = orderStatus;