const product = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,

    urlImage: DataTypes.STRING
  }, { timestamps: false, underscored: true, tableName: 'Products' });


  return product;
};

module.exports = product;