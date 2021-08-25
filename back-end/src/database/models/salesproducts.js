module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quanity: DataTypes.INTEGER
  },
  {
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Sales.belongsToMany(models.Products, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  };

  return SalesProducts;
};
