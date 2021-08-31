'use strict';

const { Sequelize } = require("../../../../../sd-09-project-blogs-api/models");

module.exports = (sequelize, DataTypes) => {
  const SalesModel = sequelize.define('Sales', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    total_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    delivery_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sale_date: {
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
