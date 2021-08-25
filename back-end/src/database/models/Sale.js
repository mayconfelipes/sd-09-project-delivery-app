module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    models.Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
  };


  return Sale;
};
