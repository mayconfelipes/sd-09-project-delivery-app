module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('sales_products', {
    sale_id: { type: DataTypes.INTEGER, primaryKey: true,},
    product_id: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
  });
  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.products, {
      through: salesProducts, foreignKey: 'product_id' ,otherKey: 'id',
    });
    // models.Categories.hasOne(models.BlogPosts, {
    //   through: salesProducts, foreignKey: 'postId', otherKey: 'categoryId', 
    // });
  };
  return salesProducts;
};