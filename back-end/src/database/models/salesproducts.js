module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quanity: DataTypes.INTEGER
  },
  {
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.sales.belongsToMany(models.products, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  };

  return SalesProducts;
};
