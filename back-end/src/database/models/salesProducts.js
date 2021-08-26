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

  SalesProductModel.associate = (models) => {
    models.SalesProductModel.belongsTo(models.Sales, {
      foreignKey: 'sale_id',
      targetKey: 'id',
    });
    models.SalesProductModel.belongsTo(models.Products, {
      foreignKey: 'product_id',
      targetKey: 'id',
    });
  }

  return SalesProductModel;
};
