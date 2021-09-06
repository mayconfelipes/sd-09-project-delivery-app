module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    deliveryAddress : { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, allowNull: false },
    status: {type: DataTypes.STRING, allowNull: false}
  },
  {
    underscored: true,
    timestamps: false,
  });
  
  sales.associate = (models) => {
    models.sales.belongsToMany(models.users, {
      through: sales, foreignKey: 'user_id' ,otherKey: 'id', as : 'usercon',
      through: sales, foreignKey: 'seller_id' ,otherKey: 'id', as : 'selercon',
    });
  };
  return sales;
};
