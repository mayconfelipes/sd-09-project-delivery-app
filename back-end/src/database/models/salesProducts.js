module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: { type: DataTypes.INTEGER, primaryKey: false,},
    productId: { type: DataTypes.INTEGER, primaryKey: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  salesProducts.associate = (models) => {
    salesProducts.belongsTo(models.sales, { foreignKey: 'saleId', as: 'sale' });
  };
  return salesProducts;
};
