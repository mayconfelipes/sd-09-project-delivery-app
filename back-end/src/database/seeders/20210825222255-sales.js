module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 1,
        seller_id: 3,
        total_price: 59,
        delivery_address: 'Thousand Sunny Go',
        delivery_number: '123',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 2,
        seller_id: 3,
        total_price: 109,
        delivery_address: 'Thousand Sunny Go',
        delivery_number: '123',
        sale_date: new Date('2011-08-02T19:58:00.000Z'),
        status: 'Preparando',
      },
      {
        id: 3,
        user_id: 1,
        seller_id: 3,
        total_price: 259,
        delivery_address: 'Thousand Sunny Go',
        delivery_number: '123',
        sale_date: new Date('2011-08-02T20:58:00.000Z'),
        status: 'Em trânsito',
      }
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};