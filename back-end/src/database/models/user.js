const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
  { timestamps: false });

  // novamente verificar 'as sales'
  newUser.associate = (models) => {
    newUser.hasMany(models.Sale,
      { foreingnKey: 'user_id', as: 'sales'});
    newUser.hasMany(models.Sale,
      { foreingnKey: 'seller_id', as: 'sales'});
  };

  return newUser;
};

module.exports = User;
