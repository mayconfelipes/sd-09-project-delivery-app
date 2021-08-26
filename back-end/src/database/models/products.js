module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, { timestamps: false });

  // products.associate = (models) => {
    // products.hasMany(models.salesProducts, { foreignKey: 'product_id' })
  // }

  return products;
};
