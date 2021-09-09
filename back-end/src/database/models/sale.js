module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    underscored: true,
    tableName: 'sales',
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { as: 'user', foreignKey: 'user_id' });
    sale.belongsTo(models.user, { as: 'seller', foreignKey: 'seller_id' });
  };

  return sale;
};
// module.exports = (sequelize, DataTypes) => {
//   const sale = sequelize.define('sale', {
//     userId: DataTypes.INTEGER,
//     sellerId: DataTypes.INTEGER,
//     totalPrice: DataTypes.DECIMAL,
//     deliveryAddress: DataTypes.STRING,
//     deliveryNumber: DataTypes.STRING,
//     saleDate: DataTypes.DATE,
//     status: DataTypes.STRING
//   },
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'sales'
//     });

//   sale.associate = (models) => {
//     sale.belongsTo(models.user, { foreignKey: 'userId' });
//     sale.belongsTo(models.user, { foreignKey: 'sellerId' });
//     sale.belongsToMany(models.product, { through: models.salesProduct });
//     sale.hasMany(models.salesProduct);
//   };

//   return sale;
// };
