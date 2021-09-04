'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesProductModel = sequelize.define('SalesProducts', {
    saleId: {
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
    productId: {
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
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProductModel.associate = (models) => {
    models.SalesProducts.belongsTo(models.Sales, {
      foreignKey: 'saleId',
      targetKey: 'id',
    });
    models.SalesProducts.belongsTo(models.Products, {
      foreignKey: 'productId',
      targetKey: 'id',
    });
  };

  return SalesProductModel;
};
