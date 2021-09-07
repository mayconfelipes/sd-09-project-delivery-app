const { sales, users } = require('../../database/models');

const getOneOrderById = async (id) => {
  // const order = await sales.findOne({ 
  //   where: { id },
  //   include: [
  //     {attributes: ['name'],
  //   model: users,
  //   as:'selercon'}
  //   ],
  // });
  const order = await sales.findOne({ where: { id } });
  // console.log(order.seller_id, 'adkaskask')
  const userName = await users.findOne({ where: { id: order.seller_id } });
  return { 
    id: order.id, saleDate: order.saleDate, status: order.status, sellerName: userName.name };
};

const getAllOrdersByCustomerId = async (email) => {
  const userId = await users.findOne({ where: { email } });
  const { id } = userId.dataValues;
  const allOrders = await sales.findAll({ where: { userId: id } });
  return allOrders;
};

module.exports = {
  getOneOrderById,
  getAllOrdersByCustomerId,
};
