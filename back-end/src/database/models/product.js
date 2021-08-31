const Product = (sequelize, DataTypes) => {
  const newProduct = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    url_image: DataTypes.STRING
  },
  { timestamps: false });

  // tirar daqui
  // newProduct.associate = (models) => {
  //   newProduct.hasMany(models.salesProducts,
  //     { foreignKey: 'product_id', as: 'products' });
  // }

  return newProduct;
};

module.exports = Product;

