'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [
      {
        name: 'Skol Lata 250ml',
        price: 2.20,
        url_image:'http://localhost:3001/images/skol_lata_350ml.jpg',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
