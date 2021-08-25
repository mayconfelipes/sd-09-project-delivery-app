module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "sale",
    {
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: DataTypes.STRING,
    },
    { timestamps: false, tableName: "sales" }
  );

  sale.associate = (models) => {
    sale.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return sale;
};
