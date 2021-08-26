module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  { timestamps: false, underscored: true });

  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { as: 'user', foreignKey: 'userId' });
    sale.belongsTo(models.User,
      { as: 'seller', foreignKey: 'sellerId'});
  }
  return sale;
};