'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        field: 'sale_id',
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        field: 'product_id',
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