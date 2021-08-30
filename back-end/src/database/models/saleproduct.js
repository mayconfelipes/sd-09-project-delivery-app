const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define(
    "SaleProduct",
    {
      quantity: DataTypes.INTEGER
    },
    { timestamps: false, tableName: 'salesProducts', underscored: true }
  );

  saleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      foreignKey: 'productId',
      through: saleProduct,
      otherKey: 'saleId'
    })

    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      foreignKey: 'saleId',
      through: saleProduct,
      otherKey: 'productId'
    })
  }

  return saleProduct;
};

module.exports = SaleProduct;
