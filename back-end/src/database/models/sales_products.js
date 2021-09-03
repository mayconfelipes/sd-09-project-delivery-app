module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    sale_id: { type: DataTypes.INTEGER, primaryKey: true,},
    product_id: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  // salesProducts.associate = (models) => {
  //   models.products.belongsToMany(models.products, {
  //     through: salesProducts, foreignKey: 'product_id' ,otherKey: 'id', as :'aaa'
  //   });
  // };
  return salesProducts;
};
