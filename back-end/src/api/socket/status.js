const { update } = require('../services/sales'); 

const ioStatus = (io) => {
  io.on('connection', (socket) => {
    socket.on('statusChange', async (data) => {
      try {
        await update(data.id, data.status);
      } catch (error) {
        console.log(error);
      }
      io.emit('statusChanged', { id: data.id, status: data.status });
    });
  });
};

module.exports = ioStatus;
