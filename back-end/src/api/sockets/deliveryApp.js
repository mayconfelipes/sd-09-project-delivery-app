module.exports = (io) => io.on('connection', (socket) => {
  console.log(`${socket.id} se conectou`);
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} se desconectou`);
  });

  socket.on('updateOrderStatus', (status) => {
    console.log(`${socket.id} atualizou o status para ${status}`);
  });
});