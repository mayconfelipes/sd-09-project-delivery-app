module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("sales", [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 11.00,
        delivery_address: 'rua onde Judas perdeu as botas',
        delivery_number: '1',
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
