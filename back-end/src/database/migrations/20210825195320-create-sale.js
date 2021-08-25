'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      deliveryAdress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};
