module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts' });

  salesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale,
      { as: 'sale', foreignKey: 'saleId', through: salesProduct, otherKey: 'productId' });
    models.Sale.belongsToMany(models.Product,
      { as: 'product', foreignKey: 'productId' , through: salesProduct, otherKey: 'saleId'})
  }
  return salesProduct;
};