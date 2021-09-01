module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  });

  users.associate = (models) => {
    users.hasMany(models.sales, { foreignKey: 'id', as: 'sale'})
  };

  return users;
};
