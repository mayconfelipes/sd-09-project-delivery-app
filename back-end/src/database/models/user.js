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

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      as: 'user',
      foreignKey: 'userId',
    })
  }

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      as: 'seller',
      foreignKey: 'sellerId',
    })
  }

  return user;
};

module.exports = User;
