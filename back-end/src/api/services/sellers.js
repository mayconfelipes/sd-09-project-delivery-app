const { users } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await users.findAll({
    where: {
      role: 'seller',
    },
  });
  return sellers;
};

module.exports = {
  getAllSellers,
};
