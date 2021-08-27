module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quanity: DataTypes.INTEGER
  },
  {
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sale',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.sales.belongsToMany(models.products, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  };

  return salesProducts;
};
