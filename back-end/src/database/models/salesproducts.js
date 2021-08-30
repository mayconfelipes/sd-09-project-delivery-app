module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts', timestamps: false, underscored: true });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SalesProducts,
      as: 'sale',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });

    models.Sale.belongsToMany(models.Product, {
      through: SalesProducts,
      as: 'product',
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }

  return SalesProducts;
};