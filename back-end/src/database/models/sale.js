module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "sale",
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(10, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: DataTypes.STRING,
    },
    { timestamps: false, tableName: "sales", underscored: true }
  );

  sale.associate = (models) => {
    sale.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "user",
    });
    sale.belongsTo(models.user, {
      foreignKey: "seller_id",
      as: "seller",
    })
  };

  return sale;
};
