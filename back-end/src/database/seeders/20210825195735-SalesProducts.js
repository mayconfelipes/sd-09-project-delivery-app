module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SalesProducts',
      [
        {
          sale_id: 1,
          product_id: 4,
          quantity: 10,
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  }
};
