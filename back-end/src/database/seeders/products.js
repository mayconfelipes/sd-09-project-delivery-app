module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Moletom da Trybe - Verde",
        price: 125.00,
        url_image: '',
      },
      {
        id: 2,
        name: "Moletom da Trybe - Marrom",
        price: 125.50,
        url_image: '',
      },
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
