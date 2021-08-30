const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "Sale",
    {
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      status: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    { timestamps: false, tableName: 'sales', underscored: true }
  );

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })

    sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'sellerId'
    })
  }

  return sale;
};

module.exports = Sale;
