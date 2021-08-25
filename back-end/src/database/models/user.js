const validateName = {
  isLength: { min: 12, msg: '"displayName" length must be at least 8 characters long' },
};

const validateEmail = {
  isEmail: { msg: '"email" must be a valid email' },
  notNull: { msg: '"email" is required' },
};

const validatePassword = {
  notNull: { msg: '"password" is required' },
  len: { min: 6, msg: '"password" length must be 6 characters long' },
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, validate: validateName },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { args: true, msg: 'User already registered' },
      validate: validateEmail,
    },
    password: { type: DataTypes.STRING, allowNull: false, validate: validatePassword },
    role: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Users' });

  User.associate = (models) => {
    models.User.hasMany(models.Sale, { foreignKey: 'userId', as: 'user' });
    models.User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'seller' });
  };

  return User;
};
