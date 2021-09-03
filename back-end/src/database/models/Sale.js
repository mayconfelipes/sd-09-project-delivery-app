module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW,},
    status: DataTypes.STRING,
  }, { timestamps: false, underscored: true, tableName: 'sales' });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    models.Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};
