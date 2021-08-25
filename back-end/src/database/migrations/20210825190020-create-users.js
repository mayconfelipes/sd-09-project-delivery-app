'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
