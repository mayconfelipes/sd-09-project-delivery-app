const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "Sale",
    {
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      status: DataTypes.STRING,
      sale_date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    },
    { timestamps: false, tableName: 'sales' }
  );

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })

    sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'seller_id'
    })
  }

  return sale;
};

module.exports = Sale;
