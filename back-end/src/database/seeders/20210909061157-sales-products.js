module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('salesProducts',
      [
        { sale_id: 1, product_id: 1, quantity: 3 },
        { sale_id: 1, product_id: 2, quantity: 4 },
        { sale_id: 1, product_id: 3, quantity: 5 },
        { sale_id: 2, product_id: 4, quantity: 3 },
        { sale_id: 2, product_id: 5, quantity: 4 },
        { sale_id: 2, product_id: 6, quantity: 5 },
        { sale_id: 2, product_id: 1, quantity: 3 },
        { sale_id: 3, product_id: 1, quantity: 3 },
        { sale_id: 3, product_id: 2, quantity: 3 },
        { sale_id: 3, product_id: 3, quantity: 3 },
        { sale_id: 3, product_id: 4, quantity: 3 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};