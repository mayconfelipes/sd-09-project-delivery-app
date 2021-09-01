const Sales = require('../src/services/Sales');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', async ({ id, status }) => {
    await Sales.updateSale(id, { status });
    io.emit('newStatus', status);
  });
});