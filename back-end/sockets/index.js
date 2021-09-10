const Sales = require('../src/services/Sales');
const Users = require('../src/services/Users');

const colorStatus = {};

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('statusInitial', ({ id, statusColor }) => {
    if (colorStatus[id]) {
      socket.emit('statusColorInitial', ({ id, statusColor: colorStatus[id] }));
    } else {
      colorStatus[id] = statusColor;
    }
  });

  socket.on('updateStatus', ({ id, status, statusColor }) => {
    colorStatus[id] = statusColor;
    io.emit('newStatus', { id, status, statusColor: colorStatus[id] });
    Sales.updateSale(id, { status });
  });

  socket.on('deleteUser', async () => {
    const result = await Users.getAll();
    io.emit('getUsers', (result));
  });
});