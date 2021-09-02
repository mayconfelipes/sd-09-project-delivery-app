module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts' });

  // salesProduct.associate = (models) => {
  //   models.Product.belongsToMany(models.Sale,
  //     { as: 'sales', foreignKey: 'saleId', through: salesProduct, otherKey: 'productId' });
  //   models.Sale.belongsToMany(models.Product,
  //     { as: 'products', foreignKey: 'productId' , through: salesProduct, otherKey: 'saleId'});

    salesProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale,
        { as: 'sales', through: salesProduct});
      models.Sale.belongsToMany(models.Product,
        { as: 'products', through: salesProduct});
  }
  return salesProduct;
};