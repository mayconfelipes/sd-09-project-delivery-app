module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING
  }, { timestamps: false, underscored: true, tableName: 'products' });
  return product;
};