// module.exports = (sequelize, DataTypes) => {
//   const SalesProduct = sequelize.define('salesProducts', {
//     quantity: DataTypes.INTEGER
//   }, { timestamp: false });

//   SalesProduct.associate = (models) => {
//     models.sale.belongsToMany(models.product, {
//       as: 'products',
//       through: "salesProducts",
//       foreignKey: 'sale_id',
//       otherkey: 'product_id',
//     });
//     models.product.belongsToMany(models.sale, {
//       as: 'sales',
//       through: "salesProducts",
//       foreignKey: 'product_id',
//       otherkey: 'sale_id',
//     });
//   };

//   return SalesProduct;
// };

module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  },
    {
      underscored: true,
      tableName: 'salesProducts'
    });

  // salesProduct.associate = (models) => {
  //   salesProduct.belongsTo(models.sale);
  //   salesProduct.belongsTo(models.product);
  // };


  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: "salesProducts",
      foreignKey: 'sale_id',
      otherkey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: "salesProducts",
      foreignKey: 'product_id',
      otherkey: 'sale_id',
    });
  };

  return salesProduct;
};
