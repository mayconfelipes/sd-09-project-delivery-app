module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    status: DataTypes.STRING(50),
  }, {
    tableName: 'sales',
    timestamps: true,
    createdAt: 'saleDate',
    updateAt: false
  });

  Sale.associate = (models) => {
    Sale.belongsToMany(models.Product, {
      through: models.SalesProducts,
      foreignKey: 'saleId',
      as: 'products',
    });

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'sellet',
    })
  }

  return Sale;
};