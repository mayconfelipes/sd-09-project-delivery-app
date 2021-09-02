module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        reference: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: "seller_id",
        reference: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      totalPrice: {
        type: Sequelize.DECIMAL(10, 2),
        field: "total_price",
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        field: "delivery_address",
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        field: "delivery_number",
      },
      saleDate: {
        type: Sequelize.DATE,
        field: "sale_date",
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Pendente',
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
