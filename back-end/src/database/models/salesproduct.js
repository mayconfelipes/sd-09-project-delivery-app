module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define(
    'salesProduct', 
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'salesProducts',
    },
  );

  salesProduct.associate = (models) => {  
    models.Product.belongsToMany(
      models.Sale,
      {
        through: salesProduct,
        as: 'sales',
        foreignKey: 'sale_id',
        targetKey: 'id',
      },
    );
    models.Sale.belongsToMany(
      models.Product,
      {
        through: salesProduct,
        as: 'products',
        foreignKey: 'product_id',
        targetKey: 'id',
      },
    );
  };

  return salesProduct;
};
