module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          id: 1,
          user_id: 3,
          seller_id: 2,
          total_price: 86.00,
          delivery_address: 'Rua do Xablau',
          delivery_number: '50',
          sale_date: new Date('2021-08-01T19:58:00.000Z'),
          status: 'PENDENTE',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
