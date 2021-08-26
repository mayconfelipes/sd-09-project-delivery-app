module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    // user_id: DataTypes.INTEGER,
    // seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'id', as: 'user_id' }),
    sales.belongsTo(models.users, { foreignKey: 'id', as: 'seller_id' })
  }

  return sales;
};