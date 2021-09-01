const Sale = (sequelize, DataTypes) => {
  const newSale = sequelize.define('sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(5,2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, { timestamps: false });

  newSale.associate = (models) => {
    // Verificar o as: user para ver o que ele traz para a gente;
    newSale.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'user' });
    newSale.belongsTo(models.user,
      { foreignKey: 'seller_id', as: 'seller' });
    }

  return newSale;
};

module.exports = Sale;
