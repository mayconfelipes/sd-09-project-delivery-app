module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    urlImage: {
      type: DataTypes.STRING,
      field: 'url_image',
    },
  }, { tableName: 'products', timestamps: false });

  return Product;
};