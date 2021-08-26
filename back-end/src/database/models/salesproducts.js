module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'SalesProducts', underscored: true });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Product.belongsToMany(models.Sale, {
        as: 'sale',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
  };
  return SalesProduct;
};
