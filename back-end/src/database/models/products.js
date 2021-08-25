module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL },
      quanurl_image: { type: DataTypes.STRING},
    },
    {
      timestamps: false,
    }
  );
  // salesProducts.associate = (models) => {
  //   models.products.belongsToMany(models.salesProducts, {
  //     through: salesProducts,
  //     foreignKey: "product_id",
  //     otherKey: "id",
  //   });
    // models.Categories.hasOne(models.BlogPosts, {
    //   through: salesProducts, foreignKey: 'postId', otherKey: 'categoryId',
    // });

  return products;
};
