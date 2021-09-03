module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
    totalPrice: { type: DataTypes.DECIMAL, field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
    saleDate: { type: DataTypes.DATE, field: 'sale_date' },
    status: DataTypes.STRING,
  }, { tableName: 'sales' });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};
