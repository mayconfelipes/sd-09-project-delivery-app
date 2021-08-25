module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  });

  return Sales;
};