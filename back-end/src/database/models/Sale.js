module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Sales',
  });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    models.Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
  };

  return Sale;
};
