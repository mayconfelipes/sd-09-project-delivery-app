module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define(
    'salesProduct', 
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "sale_id",
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "product_id",
      }
    },
    {
      tableName: 'salesProducts',
      underscored: true,
      timestamps: false,
    },
  );

  salesProduct.associate = (models) => {  
    models.Product.belongsToMany(
      models.Sale,
      {
        through: salesProduct,
        as: 'sales',
        foreignKey: 'product_id',
        targetKey: 'id',
      },
    );
    models.Sale.belongsToMany(
      models.Product,
      {
        through: salesProduct,
        as: 'products',
        foreignKey: 'sale_id',
        targetKey: 'id',
      },
    );
  };

  return salesProduct;
};
