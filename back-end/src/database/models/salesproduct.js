module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
  },
  { timestamps: false, tableName: 'salesProducts' });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: models.SalesProduct,
      as: 'sales',
      foreignKey: 'saleId',
    });
    models.Product.belongsToMany(models.Sale, {
      through: models.SalesProduct,
      as: 'product',
      foreignKey: 'productId',
    });
  };

  return SalesProduct;
};