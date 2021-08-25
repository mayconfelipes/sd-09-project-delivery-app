const Product = (sequelize, DataTypes) => {
  const newProduct = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    url_image: DataTypes.STRING
  },
  { timestamps: false });

  // fazer a associação

  return newUser;
};

module.exports = Product;

