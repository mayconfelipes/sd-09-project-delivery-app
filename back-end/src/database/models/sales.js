module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    total_price: DataTypes.NUMBER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    Sales.belongsTo(models.Users, { foreignKey: 'seller_id', as: 'seller' });
  };

  return Sales;
};