module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Sale' });

  Sale.associate = (models) => {
    Sale.hasMany(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  Sale.associate = (models) => {
    Sale.hasMany(models.User, { foreignKey: 'seller_id', as: 'user' });
  };

  return Sale;
};
