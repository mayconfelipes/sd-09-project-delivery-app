module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts', timestamps: false, underscored: true });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }

  return SalesProducts;
};