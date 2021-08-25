module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER
  });

  return salesProducts;
};

