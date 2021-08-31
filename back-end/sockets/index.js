module.exports = (io) => io.on('connection', (socket) => {
  socket.on('click', (value) => {
    socket.emit('test', value);
  });
});