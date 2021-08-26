const Sale = (sequelize, DataTypes) => {
  const newSale = sequelize.define('Sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, { timestamps: false });

  newSale.associate = (models) => {
    // Verificar o as: user para ver o que ele traz para a gente;
    newSale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' });
    newSale.belongsTo(models.User,
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return newSale;
};

module.exports = Sale;
