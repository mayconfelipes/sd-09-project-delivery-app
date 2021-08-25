module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, { tableName: 'salesProducts' });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SalesProducts,
      as: 'sales',
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.Sale.belongsToMany(models.Product, {
      through: SalesProducts,
      as: 'products',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }

  return SalesProducts;
};