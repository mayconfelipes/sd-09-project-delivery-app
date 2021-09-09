module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 44.45,
        delivery_address: 'rua da palma',
        delivery_number: '5',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
        updated_At: new Date('2011-08-01T19:58:51.000Z'),
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 44.45,
        delivery_address: 'rua da palma',
        delivery_number: '5',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
        updated_At: new Date('2011-08-01T19:58:51.000Z'),
      },
      { 
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 44.45,
        delivery_address: 'rua da palma',
        delivery_number: '5',
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
        updated_At: new Date('2011-08-01T19:58:51.000Z'),
      }
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
