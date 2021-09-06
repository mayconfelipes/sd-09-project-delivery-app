const { update } = require('../services/sales');

const ioStatus = (io) => {
  io.on('connection', (socket) => {
    socket.on('statusChange', async (data) => {
      console.log(data);
      const { status } = await update(data.id, data.status);
      console.log(status);
      io.emit('statusChanged', { id: data.id, status });
    });
  });
};

module.exports = ioStatus;
