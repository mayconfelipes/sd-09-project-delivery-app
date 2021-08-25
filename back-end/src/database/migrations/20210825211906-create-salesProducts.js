'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Sales', key: 'id' },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};
