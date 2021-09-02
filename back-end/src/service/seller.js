const { User } = require('../database/models');

const findSeller = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  });

  if (!sellers) return { error: 'sellers_not_found' };

  return sellers;
};

module.exports = {
  findSeller,
};