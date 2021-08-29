const Product = (sequelize, DataTypes) => {
  const newProduct = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    url_image: DataTypes.STRING
  },
  { timestamps: false });

  return newProduct;
};

module.exports = Product;

