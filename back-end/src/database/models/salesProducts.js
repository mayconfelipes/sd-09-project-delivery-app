'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesProductModel = sequelize.define('SalesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'sales',
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { 
    tableName: 'sales_products',
    timestamps: false,
  });

  return SalesProductModel;
};
