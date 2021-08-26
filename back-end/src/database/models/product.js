const Product = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING,
    },
    { timestamps: false, tableName: "products" }
  );

  return product;
};

module.exports = Product;
