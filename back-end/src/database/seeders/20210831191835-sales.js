module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('sales', [
    {
      user_id: 3,
      seller_id: 2,
      total_price: 9.99,
      delivery_address: 'Rua das Biritas',
      delivery_number: '51',
      sale_date: '2020-07-04',
      status: 'Pendente'
    },
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('sales', null, {})
};
