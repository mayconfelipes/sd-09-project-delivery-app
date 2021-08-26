module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', 
  {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'SalesProducts' });
  
  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct, as: 'sales', foreignKey: 'product_id', otherKey: 'sale_id',
    });

    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct, as: 'products', foreignKey: 'sale_id', otherKey: 'product_id',
    });
  };

  return SaleProduct;
};