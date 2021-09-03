const Sales = require('../src/services/Sales');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', ({ id, status }) => {
    io.emit('newStatus', { id, status });
    Sales.updateSale(id, { status });
  });
});