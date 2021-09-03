const SalesProducts = (sequelize, DataTypes) => {
  const newSalesProducts = sequelize.define('salesProducts', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, { timestamps: false, freezeTableName:true, underscored: true });

  //fazer associacao n:n
  newSalesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: newSalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: newSalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }

  return newSalesProducts;
};

module.exports = SalesProducts;


