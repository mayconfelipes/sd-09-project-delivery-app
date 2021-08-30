module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'sales' });
  };

  return User;
};
