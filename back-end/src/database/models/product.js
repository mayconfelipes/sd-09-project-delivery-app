module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    url_image: DataTypes.STRING,
  });

  return Product;
};
