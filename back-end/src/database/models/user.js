const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { timestamps: false, underscored: false });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'purchases' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'sales' });
  };

  return User;
};

module.exports = User;