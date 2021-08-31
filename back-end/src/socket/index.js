const RepositorySales = require('../repositories/RepositorySales');

const updateSaleStatus = async (io, id, status) => {
  await RepositorySales.updateSale(id, status);
  io.emit('updateStatus', { status, id });
};

module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`Client ${socket.id} connected`);
    socket.on('updateOrders', ({ id, status }) => updateSaleStatus(io, id, status));
  });
};
