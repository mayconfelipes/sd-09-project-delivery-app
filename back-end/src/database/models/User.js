module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, underscored: true, tableName: 'users' });

  User.associate = (models) => {
    models.User.hasMany(models.Sale, { foreignKey: 'userId', as: 'user' });
    models.User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'seller' });
  }

  return User;
};
