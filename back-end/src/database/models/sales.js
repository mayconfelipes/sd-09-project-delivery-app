'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesModel = sequelize.define('Sales', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
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
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { 
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  SalesModel.associate = (models) => {
    models.Sales.belongsTo(models.Users, {
      foreignKey: 'user_id',
      target: 'user',
    });

    models.Sales.belongsTo(models.Users, {
      foreignKey: 'seller_id',
      target: 'seller',
    });
  }

  return SalesModel;
};
