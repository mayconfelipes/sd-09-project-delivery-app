module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product', 
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false,
        defaultValue: 0,
      },
      urlImage: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      tableName: 'products',
      underscored: true,
    },
  );

  return Product;
};
