'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        role: 'administrator',
      },
      {
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        role: 'seller',
      },
      {
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        role: 'customer',
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
