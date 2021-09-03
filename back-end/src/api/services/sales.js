const { format } = require('date-fns');
const { sales, users, products, salesProducts } = require('../../database/models');

const saleDate = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
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
 const userId = await users.findOne({ where: { email: userEmail } });
 return userId.id;
};

const registerSale = async ({ address, addressNumber, sellerId, totalPrice, userEmail, cartItens }) => {
  const userId = await getIdUser(userEmail);
  // const deliveryAddress = address;
  // const deliveryNumber = addressNumber;
  // const newSale = await sales.create({
  //   userId, 
  //   sellerId, 
  //   totalPrice,
  //   deliveryAddress,
  //   deliveryNumber,
  //   saleDate,
  // });
  const newSale = await sales.create({
    user_id: userId, 
    seller_id: sellerId, 
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: addressNumber,
    sale_date: saleDate,
  });
  const productArray = []
  cartItens.forEach(({item}) => productArray.push(products.findOne({where: {name: item.name}})))
  const idList = await Promise.all(productArray);
  idList.forEach(({id}, index) => salesProducts.create({
    sale_id: newSale.id, product_id: id, quantity: cartItens[index].item.quant,
  }));
  return newSale;
};
module.exports = {
  getAll,
  getById,
  registerSale,
};
