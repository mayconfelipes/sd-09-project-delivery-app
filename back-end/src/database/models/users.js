const models = require('../../database/models');

module.exports = (sequelize, DataTypes) => {
  const UsersModel = sequelize.define('Users', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(32),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
  },
  { 
    tableName: 'users',
    timestamps: false,
  });

  // UsersModel.associate = (models) => {
  //   models.Users.hasMany(models.Sales, 
  //     {
  //       foreignKey: 'sellerId',
  //       as: 'seller',
  //     })
  // }

  return UsersModel;
};
