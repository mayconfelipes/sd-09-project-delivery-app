module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.sale, { as: 'sales_user', foreignKey: 'user_id'});
    User.hasMany(models.sale, { as: 'sales_seller', foreignKey: 'seller_id'});
  };

  return User;
};
// module.exports = (sequelize, DataTypes) => {
//   const user = sequelize.define('user', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     role: DataTypes.STRING
//   },
//     {
//       timestamps: false,
//       tableName: 'users'
//     });

//   user.associate = (models) => {
//     user.hasOne(models.sale);
//   };

//   return user;
// };
