// const service = require('../service');

module.exports = (io) => io.on('connection', async (socket) => {
  socket.on('updateStatus', async (newStatus) => {
    io.emit('newStatus', newStatus);
  });
});
