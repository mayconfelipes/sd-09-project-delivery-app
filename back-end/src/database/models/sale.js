const Sale = (sequelize, DataTypes) => {
  const newSale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(5,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, { timestamps: false, underscored: true}
  );

  newSale.associate = (models) => {
    // Verificar o as: user para ver o que ele traz para a gente;
    newSale.belongsTo(models.user,
      { foreignKey: 'userId', as: 'user' });
    newSale.belongsTo(models.user,
      { foreignKey: 'sellerId', as: 'seller' });
    }

  return newSale;
};

module.exports = Sale;
