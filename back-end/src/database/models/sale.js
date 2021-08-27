module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    totalPrice: DataTypes.DECIMAL,
    deliveryAdress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, { updatedAt: false, tableName: 'sales', underscored: true });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};
