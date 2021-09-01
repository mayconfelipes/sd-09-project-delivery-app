module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER
  }, { timestamp: false });

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: "salesProducts",
      foreignKey: 'sale_id',
      otherkey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: "salesProducts",
      foreignKey: 'product_id',
      otherkey: 'sale_id',
    });
  };

  return SalesProduct;
};
