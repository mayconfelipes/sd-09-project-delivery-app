module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('updateOrderStatus', (data) => (
      socket.broadcast.emit('updateOrderStatus', data)
    ));
  });
};