module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true,},
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  // salesProducts.associate = (models) => {
  //   models.products.belongsToMany(models.products, {
  //     through: salesProducts, foreignKey: 'product_id' ,otherKey: 'id', as :'aaa'
  //   });
  // };
  return salesProducts;
};
