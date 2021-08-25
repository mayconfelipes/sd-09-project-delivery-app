module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    urlImage: DataTypes.STRING,
  }, { tableName: 'products', timestamps: false });

  return Product;
};