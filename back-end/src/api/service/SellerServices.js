const boom = require('@hapi/boom');

const { sale, user, product } = require('../../database/models');

let seller;

const getSellerId = async (email) => {
  seller = await user.findOne({ where: { email } });
  if (!seller) throw boom.notFound('User not found');

  return seller;
};

const getAll = async (email) => {
  seller = await getSellerId(email);
  const { id } = seller.dataValues;

  const salesBySeller = await sale.findAll({
    where: {
      sellerId: id,
    },
    include: {
      model: product,
      as: 'products',
      through: {
        attributes: { include: ['quantity'] },
      },
    },
  });
  if (!salesBySeller.length) throw boom.notFound('Empty sales');

  return salesBySeller;
};

module.exports = {
  getAll,  
};
