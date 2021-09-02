module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING, defaultValue: 'Pendente' },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'sales'
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'userId', as: 'user' });
    sales.belongsTo(models.users, { foreignKey: 'sellerId', as: 'seller' });
  };

  return sales;
};