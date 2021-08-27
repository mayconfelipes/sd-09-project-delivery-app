'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductsModel = sequelize.define('Products', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      unique: true,
      type:DataTypes.STRING(100),
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2),
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING(200),
      defaultValue: '',
    },
  },
  { 
    tableName: 'products',
    timestamps: false,
  });

  return ProductsModel;
};
