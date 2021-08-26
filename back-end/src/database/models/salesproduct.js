module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: DataTypes.INTEGER
  }, { timestamp: false });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherkey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherkey: 'sale_id',
    });
  };

  return SalesProduct;
};