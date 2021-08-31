const SalesProducts = (sequelize, DataTypes) => {
  const newSalesProducts = sequelize.define('salesProducts', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, { timestamps: false });

  //fazer associacao n:n
  newSalesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: newSalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: newSalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return newSalesProducts;
};

module.exports = SalesProducts;


