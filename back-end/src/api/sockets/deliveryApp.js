module.exports = (io) => io.on('connection', (socket) => {
  console.log(`${socket.id} se conectou`);
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} se desconectou`);
  });

  socket.on('updateOrderStatus', (order) => {
    console.log(`${socket.id} atualizou o status do pedido ${order} para ${order.status}`);
    io.emit('updateOrderStatus', order);
  });

  socket.on('createNewOrder', (orderEvent) => {
    console.log(`${socket.id} criou um novo pedido`);
    io.emit('newOrder', orderEvent);
  });
});

// const deliveryIo = (io) => {
//   io.on('connection', (socket) => {
//     console.log(`${socket.id} se conectou`);
    
//     socket.on('disconnect', () => {
//       console.log(`${socket.id} se desconectou`);
//     });
  
//     socket.on('updateOrderStatus', (status) => {
//       console.log(`${socket.id} atualizou o status para ${status}`);
//     });
//   });
// };

// module.exports = deliveryIo;
