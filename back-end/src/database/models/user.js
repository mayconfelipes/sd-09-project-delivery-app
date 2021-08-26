module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { tableName: 'users', timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Sale);
  }

  return User;
};
