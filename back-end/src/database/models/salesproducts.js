module.exports = (sequelize, _DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'SalesProducts' });

  SalesProduct.associate = (models) => {
    Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    Category.belongsToMany(models.BlogPost, {
        as: 'sale',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
  };
  return SalesProduct;
};
