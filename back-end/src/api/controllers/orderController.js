const rescue = require('express-rescue');
const { newOrder, populateSaleProd } = require('../service/orderServices');

const insertOrderInSale = rescue(async (req, res) => {
  const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status, products } = req.body;

  console.log(req.body);

  const insertNewOrder = await newOrder(userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status);

  await populateSaleProd(insertNewOrder.id, products);

  res.status(201).json({ saleId: insertNewOrder.id });
});

module.exports = { insertOrderInSale };
