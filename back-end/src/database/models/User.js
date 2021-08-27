module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, underscored: true, tableName: 'users' });

  User.associate = (models) => {
    models.User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'user' });
    models.User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller' });
  }

  return User;
};
