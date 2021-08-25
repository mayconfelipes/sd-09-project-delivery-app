module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { tableName: 'sales', timestamps: false });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Sale;
};
