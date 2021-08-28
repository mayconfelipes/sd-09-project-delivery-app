module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define(
    "salesProduct",
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: "salesProducts",
      underscored: true,
    }
  );

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: "sale",
      through: salesProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });

    models.sale.belongsToMany(models.product, {
      as: "product",
      through: salesProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };

  return salesProduct;
};
