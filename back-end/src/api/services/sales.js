// const { format } = require('date-fns');
const { sales, users, products, salesProducts } = require('../../database/models');

// const saleDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
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

const registerSalesProducts = async (cartItens, newSale) => {
  const productArray = [];
  cartItens.forEach(({ item }) => 
  productArray.push(products.findOne({ where: { name: item.name } })));
  const idList = await Promise.all(productArray);
  const result = idList.map(({ id }, index) => salesProducts.create({
    saleId: newSale.id, productId: id, quantity: cartItens[index].item.quant,
  }));
  try {
    await Promise.all(result);
  } catch (error) {
    console.log(error);
  }
};

const registerSale = async (
  { address, addressNumber, sellerId, totalPrice, userEmail, cartItens, saleDate }) => {
  const userId = await getIdUser(userEmail);
  const newSale = await sales.create({
    userId, 
    sellerId, 
    totalPrice,
    deliveryAddress: address,
    deliveryNumber: addressNumber,
    saleDate,
    status: 'Pendente',
  });
  await registerSalesProducts(cartItens, newSale);
  return newSale;
};
module.exports = {
  getAll,
  getById,
  registerSale,
};
