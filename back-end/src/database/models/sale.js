const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    status: DataTypes.STRING(50),
    sale_date: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  }, {
    tableName: 'sales',
    timestamps: false,
    createdAt: 'saleDate',
    updateAt: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    // Sale.belongsToMany(models.Product, {
    //   through: models.SalesProducts,
    //   foreignKey: 'saleId',
    //   as: 'products',
    // });

    Sale.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'user',
    });

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller',
    })
  }

  return Sale;
};