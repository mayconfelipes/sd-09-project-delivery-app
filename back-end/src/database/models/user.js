module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING, 
  }, { timestamps: false, tableName: 'users' });
  
  user.associate = (models) => {
    user.hasMany(models.Sale,
      { as: 'sale', foreignKey: 'sellerId'})
    user.hasMany(models.Sale,
      { as: 'order', foreignKey: 'userId' })
  }
  return user;
};