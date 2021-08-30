const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER
  }, { timestamps: false, underscored: true });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SalesProduct;
};

module.exports = SalesProduct;