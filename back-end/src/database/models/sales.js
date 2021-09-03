'use strict';

const models = require('../../database/models');

module.exports = (sequelize, DataTypes) => {
  const SalesModel = sequelize.define('Sales', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
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
      defaultValue: DataTypes.NOW,
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

    models.Sales.hasOne(models.Users, {
      foreignKey: 'id',
      as: 'seller',
    });

    models.Sales.belongsToMany(models.Products, { 
      foreignKey: 'saleId',
      as: 'products',
      through: 'SalesProducts',
    });
  }

  return SalesModel;
};
