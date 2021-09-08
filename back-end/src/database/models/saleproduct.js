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
      foreignKey: 'saleId',
      through: saleProduct,
      otherKey: 'productId'
    })

    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      foreignKey: 'productId', 
      through: saleProduct,
      otherKey: 'saleId',
    })
  }

  return saleProduct;
};

module.exports = SaleProduct;
