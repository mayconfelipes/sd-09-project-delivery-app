const deliveryAppSocket = (io) => io.on('connection', async (socket) => {
  socket.on('updateFromCustomer', () => {
    io.emit('updateSeller');
  });

  socket.on('updateFromSeller', () => {
    io.emit('updateCustomer');
  });
});

module.exports = { deliveryAppSocket };
