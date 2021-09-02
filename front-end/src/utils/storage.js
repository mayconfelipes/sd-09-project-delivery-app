const USERDATA = 'user';
const INVALIDINDEX = -1;

const getUserDataLocalStorage = () => JSON.parse(localStorage.getItem(USERDATA));
const removeUserDataLocalStorage = () => localStorage.removeItem(USERDATA);

const getNameLocalStorage = () => {
  const userData = getUserDataLocalStorage();
  if (userData && userData.name) { return userData.name; }
  return 'sem nome cadastrado';
};

const getTokenLocalStorage = () => {
  const userData = getUserDataLocalStorage();
  return userData && userData.token ? userData.token : '';
};

const getCarrinhoLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('carrinho'));
  return cart || [];
};

const setCarrinhoLocalStorage = (productData) => {
  let cart = getCarrinhoLocalStorage();

  const index = cart.findIndex(
    ({ productId }) => productId === productData.productId,
  );
  if (index > INVALIDINDEX) {
    if (productData.quantity === 0) {
      cart = cart.filter(
        ({ productId }) => parseInt(productId,
          10) !== parseInt(productData.productId, 10),
      );
    } else {
      cart[index] = productData;
    }
  } else {
    cart.push(productData);
  }
  localStorage.setItem('carrinho', JSON.stringify(cart));
};

const getTotalCartLocalStorage = () => {
  const cart = getCarrinhoLocalStorage();
  const totalCart = cart.reduce(
    (accumulator, { subTotal }) => accumulator + Number(subTotal.replace(',', '.')),
    0,
  );
  return totalCart.toFixed(2).replace('.', ',');
};

const removeCarrinhoLocalStorage = () => localStorage.removeItem('carrinho');

const getQtdProductCartLocalStorage = (idProduct) => {
  const cart = getCarrinhoLocalStorage();
  const qtdProduct = cart
    .filter(({ productId }) => parseInt(productId, 10) === idProduct)[0];
  return qtdProduct ? qtdProduct.quantity : 0;
};

module.exports = {
  getNameLocalStorage,
  getTokenLocalStorage,
  removeUserDataLocalStorage,
  setCarrinhoLocalStorage,
  getCarrinhoLocalStorage,
  removeCarrinhoLocalStorage,
  getTotalCartLocalStorage,
  getQtdProductCartLocalStorage,
};
