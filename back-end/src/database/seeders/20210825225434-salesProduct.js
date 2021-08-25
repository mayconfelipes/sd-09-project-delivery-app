module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("salesProducts", [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 5,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelet("salesProducts", null, {});
  },
};
