'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
        name: { type: Sequelize.STRING(100) },
        price: { type: Sequelize.DECIMAL(4,2) },
        url_image: { type: Sequelize.STRING(200) },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
