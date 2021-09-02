module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'products',
  });

  return products;
};