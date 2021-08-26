module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { as: 'sales', foreignKey: 'user_id'});
    User.hasMany(models.Sale, { as: 'sales', foreignKey: 'seller_id'});
  };

  return User;
};