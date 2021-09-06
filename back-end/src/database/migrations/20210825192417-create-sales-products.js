'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }     
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};


