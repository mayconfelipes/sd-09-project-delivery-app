const SalesProducts = (sequelize, DataTypes) => {
  const newSalesProducts = sequelize.define('SalesProducts', {
    // sale_id: DataTypes.INTEGER,
    // product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, { timestamps: false });

  //fazer associacao n:n
  newSalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: newSalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: newSalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return newSalesProducts;
};

module.exports = SalesProducts;


