module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, underscored: true });

  salesProduct.associate = (models) => {
    salesProduct.belongsToMany(models.Sale,
      { as: 'sale', foreignKey: 'saleId', through: salesProduct, otherKey: 'productId' });
    salesProduct.belongsToMany(models.Product,
      { as: 'product', foreignKey: 'productId' , through: salesProduct, otherKey: 'saleId'})
  }
  return salesProduct;
};