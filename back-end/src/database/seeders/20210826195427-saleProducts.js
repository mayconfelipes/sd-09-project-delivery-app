module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('SalesProducts',
      [{
        id: 1,
        sale_id: 1,
        product_id: 2,
        quantity: 40,
      },
      {
        id: 2,
        sale_id: 2,
        product_id: 1,
        quantity: 6,
      },      {
        id: 2,
        sale_id: 2,
        product_id: 3,
        quantity: 10,
      },
      {
        id: 3,
        sale_id: 3,
        product_id: 4,
        quantity: 10,
      },
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  },
};