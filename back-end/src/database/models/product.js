const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING
  }, { timestamps: false, underscored: true, tableName: 'Products' });

  return Product;
};

module.exports = Product;