// module.exports = (sequelize, DataTypes) => {
//   const Product = sequelize.define("product", {
//     name: DataTypes.STRING,
//     price: DataTypes.DECIMAL(10,2),
//     url_image: DataTypes.STRING,
//   });

//   return Product;
// };

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  },
    {
      timestamps: false,
      tableName: 'products'
    });

  product.associate = (models) => {
    product.belongsToMany(models.sale, { through: models.salesProduct });
    product.hasMany(models.salesProduct);
  };

  return product;
};
