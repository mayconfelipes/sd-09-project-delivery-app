module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, field: 'userId' },
    sellerId: { type: DataTypes.INTEGER, field: 'sellerId' },
    totalPrice: DataTypes.DECIMAL,
    deliveryAdress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.STRING,
    status: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Sales' });

  return Sale;
};
