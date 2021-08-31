module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quanity: DataTypes.INTEGER
  },
  {
    underscored: true,
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sale',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sales.belongsToMany(models.products, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    })
  };

  return salesProducts;
};
