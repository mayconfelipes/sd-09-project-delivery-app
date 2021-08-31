const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
  { timestamps: false });

  // novamente verificar 'as sales'
  // newUser.associate = (models) => {
  //   newUser.hasMany(models.sale,
  //     { foreingnKey: 'user_id', as: 'user'});
  //   newUser.hasMany(models.sale,
  //     { foreingnKey: 'seller_id', as: 'seller'});
  // };
  return newUser;
};

module.exports = User;
