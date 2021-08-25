'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id',
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'seller_id',
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'delivery_address',
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(50),
        field: 'delivery_number',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};