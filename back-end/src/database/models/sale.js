module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    status: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    updated_At: DataTypes.DATE,
  }, { timestamp: false });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: 'user', foreignKey: 'user_id'});
    Sale.belongsTo(models.user, { as: 'seller', foreignKey: 'seller_id'});
  };
  
  return Sale;
};
