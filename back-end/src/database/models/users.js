module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    // tableName: 'Users',
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.BlogPosts,
  //     { foreignKey: 'id', as: 'blogposts' });
  // };

  return users;
};