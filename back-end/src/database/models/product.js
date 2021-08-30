const Product = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING,
    },
    { timestamps: false, tableName: "products", underscored: true }
  );

  return product;
};

module.exports = Product;
