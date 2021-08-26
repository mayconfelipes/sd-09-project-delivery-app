module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    Sales.belongsTo(models.Users, { foreignKey: 'seller_id', as: 'seller' });
  };

  return Sales;
};