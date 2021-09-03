module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 5,
        },
        {
          sale_id: 1,
          product_id: 4,
          quantity: 10,
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
