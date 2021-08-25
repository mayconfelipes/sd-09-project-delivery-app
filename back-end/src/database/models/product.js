module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(3, 2),
    urlImage: DataTypes.STRING
  }, { timestamps: false, underscored: true });
  return product;
};