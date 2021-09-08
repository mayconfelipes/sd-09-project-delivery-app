const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "Sale",
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      status: DataTypes.STRING,
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
