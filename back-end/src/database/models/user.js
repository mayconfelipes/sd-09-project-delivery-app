const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'users', underscored: true }
  );

  return user;
};

module.exports = User;
