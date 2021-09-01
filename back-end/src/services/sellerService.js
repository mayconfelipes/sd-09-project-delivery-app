const { user } = require('../database/models');

const seller = async () => {
  const sellers = await user.findAll({ where:
     { role: 'seller' },
     attributes: { exclude: ['password', 'role', 'email'] } });
  return sellers;
};

module.exports = {
  seller,
};
