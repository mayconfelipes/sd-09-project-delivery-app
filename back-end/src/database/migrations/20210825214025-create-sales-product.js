module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        primaryKey: true,
        references: {
          model: 'Sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      product_id: {
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};
