const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER
  }, { timestamps: false });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProduct;
};

module.exports = SalesProduct;