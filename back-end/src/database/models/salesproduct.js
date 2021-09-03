module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true, field: 'sale_id' },
    productId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true, field: 'product_id' },
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'salesProducts' });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: models.SalesProduct,
      as: 'products',
      foreignKey: 'saleId',
    });
    models.Product.belongsToMany(models.Sale, {
      through: models.SalesProduct,
      as: 'sales',
      foreignKey: 'productId',
    });
  };

  return SalesProduct;
};