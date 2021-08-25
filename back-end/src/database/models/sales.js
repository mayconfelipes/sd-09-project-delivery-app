module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    total_price: { type: DataTypes.INTEGER, allowNull: false },
    delivery_address : { type: DataTypes.STRING, allowNull: false },
    delivery_number: { type: DataTypes.STRING, allowNull: false },
    sale_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: false,
  });
  sales.associate = (models) => {
    models.sales_products.belongsToMany(models.user, {
      through: sales, foreignKey: 'user_id' ,otherKey: 'id',
      through: sales, foreignKey: 'seller_id' ,otherKey: 'id',
    });
    // models.Categories.hasOne(models.BlogPosts, {
    //   through: salesProducts, foreignKey: 'postId', otherKey: 'categoryId', 
    // });
  };
  return sales;
};