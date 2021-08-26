module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sellerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9,2),
        allowNull: false,
        defaultValue: 0,
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      saleDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'sales',
      underscored: true,
    },
  );

  Sale.associate = (models) => {  
    Sale.belongsTo(
      models.User,
      { foreignKey: 'user_id', as: 'user' },
    );
    Sale.belongsTo(
      models.User,
      { foreignKey: 'seller_id', as: 'seller' },
    );
  };

  return Sale;
};
