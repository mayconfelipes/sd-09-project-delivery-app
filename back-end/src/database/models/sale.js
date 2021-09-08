module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    status: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    updated_At: DataTypes.DATE,
  }, { timestamp: false });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { as: 'user', foreignKey: 'user_id'});
    sale.belongsTo(models.user, { as: 'seller', foreignKey: 'seller_id'});
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
