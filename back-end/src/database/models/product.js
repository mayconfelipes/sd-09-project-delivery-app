module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING(200),
  }, { tableName: 'products', underscored: true, timestamps: false, });

  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, {
      through: models.SalesProducts,
      foreignKey: 'productId',
      as: 'sales',
    });
  }

  return Product;
};