'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type:Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING(200),
        defaultValue: '',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
