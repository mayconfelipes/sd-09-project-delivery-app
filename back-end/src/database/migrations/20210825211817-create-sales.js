'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'Users', key: 'id' },
    },
    seller_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'Users', key: 'id' },
    },
      total_price: { type: Sequelize.DECIMAL(9,2) },
      delivery_address: { type: Sequelize.STRING(100) },
      delivery_number: { type: Sequelize.STRING(50) },
      sale_date: { type: Sequelize.DATE },
      status: { type: Sequelize.STRING(50) },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};
