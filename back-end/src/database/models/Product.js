module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(9, 2),
    urlImage: DataTypes.STRING,
  }, { timestamps: false, underscored: true, tableName: 'products' });

  return Product;
};
