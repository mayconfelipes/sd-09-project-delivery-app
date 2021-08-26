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
        type: Sequelize.DECIMAL,
        field: 'total_price'
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        field: 'delivery_number'
      },
      status: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        field: 'user_id',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        field: 'seller_id',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      saleDate: {
        type: Sequelize.DATE,
        field: 'sale_date'
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};