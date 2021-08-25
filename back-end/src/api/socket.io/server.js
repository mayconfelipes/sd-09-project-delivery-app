const userController = require("../../database/controllers/users.js");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Novo usuário conectado ${socket.id}`);
    socket.on("login", async (data) => {
      const user = await userController.findUser(data);
      console.log(user)
      socket.emit("login", user)
    });
  });
};
