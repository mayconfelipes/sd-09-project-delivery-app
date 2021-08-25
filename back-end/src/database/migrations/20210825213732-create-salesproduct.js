module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("salesProducts", {
      saleId: {
        type: Sequelize.INTEGER,
        field: "sale_id",
        primaryKey: true,
        reference: {
          model: "sales",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: 'CASCADE',
      },
      productId: {
        type: Sequelize.INTEGER,
        field: "product_id",
        primaryKey: true,
        reference: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("salesProducts");
  },
};
