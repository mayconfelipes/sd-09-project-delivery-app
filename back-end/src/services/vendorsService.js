const { user } = require('../database/models');

const getAllVendorsService = async () => {
  const vendors = await user.findAll(
    { where: { role: 'seller' },
    attributes: ['id', 'name'] },
  );
  
  return vendors;
};

module.exports = { getAllVendorsService };