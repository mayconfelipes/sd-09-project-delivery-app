const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define(
    "SaleProduct",
    {
      quantity: DataTypes.INTEGER
    },
    { timestamps: false, tableName: 'salesProducts' }
  );

  saleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
      through: saleProduct,
      otherKey: 'sale_id'
    })

    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      foreignKey: 'sale_id',
      through: saleProduct,
      otherKey: 'product_id'
    })
  }

  return saleProduct;
};

module.exports = SaleProduct;
