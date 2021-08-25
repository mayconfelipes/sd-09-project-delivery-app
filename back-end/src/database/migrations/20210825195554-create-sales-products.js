'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};