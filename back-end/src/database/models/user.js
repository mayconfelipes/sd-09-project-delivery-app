module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
    },
  );

  User.associate = (models) => {
    User.hasMany(
      models.Sale,
      { foreignKey: 'user_id', as: 'user' },
    );
    User.hasMany(
      models.Sale,
      { foreignKey: 'seller_id', as: 'seller' },
    );
  };

  return User;
};
