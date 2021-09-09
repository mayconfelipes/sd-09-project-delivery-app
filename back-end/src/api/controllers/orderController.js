const rescue = require('express-rescue');
const { newOrder, populateSaleProd, findOrderById } = require('../service/orderServices');

const insertOrderInSale = rescue(async (req, res) => {
  const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status, products } = req.body;

  const insertNewOrder = await newOrder({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });

  await populateSaleProd(insertNewOrder.id, products);

  const findById = await findOrderById(insertNewOrder.id);

  // console.log('req.body', req.body);
  console.log('findById', findById.dataValues);
  res.status(201).json(findById.dataValues);
});

module.exports = { insertOrderInSale };
