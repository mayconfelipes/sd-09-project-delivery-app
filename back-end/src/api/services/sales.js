const { sales, users } = require('../../database/models');
const { format } = require('date-fns');

const time = format(new Date(), 'dd-MM-yyyy HH:mm:ss');

const getAll = async () => {
  const allSales = await sales.findAll();
  return allSales;
};

const getById = async (id) => {
  const sale = await sales.findOne({
    where: { id },
  });
  return sale;
};

const getIdUser = async (userEmail) => {
 const userId = await users.findOne({ email: userEmail });
 return userId.dataValues.id
};

const registerSale = async ({address, addressNumber, sellerId, totalPrice, userEmail}) => {
  const userId = await getIdUser(userEmail);
  const newSale = await sales.create({
    user_id: userId, 
    seller_id: sellerId, 
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: addressNumber,
    sale_date: time,
  });
  return newSale.dataValues;
};

module.exports = {
  getAll,
  getById,
  registerSale,
};
