'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      id:{
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productId: {
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


