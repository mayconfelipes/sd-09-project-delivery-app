module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define(
    "salesProduct",
    {
      sale_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: "salesProducts",
    }
  );

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: "sale",
      through: salesProduct,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });

    models.sale.belongsToMany(models.product, {
      as: "product",
      through: salesProduct,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
  };

  return salesproduct;
};
