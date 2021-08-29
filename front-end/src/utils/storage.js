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
  const cart = getCarrinhoLocalStorage();
  const index = cart.findIndex(({ productId }) => productId === productData.id);
  if (index > INVALIDINDEX) {
    cart[index] = productData; // subtitui os dados da posição, pelos atualizados
  } else {
    cart.push(productData);
  }
  localStorage.setItem('carrinho', JSON.stringify(cart));
};

const getTotalCartLocalStorage = () => {
  const cart = getCarrinhoLocalStorage();
  const totalCart = cart.reduce(
    (accumulator, { subTotal }) => accumulator + subTotal,
    0,
  );
  return `Ver Carrinho: ${totalCart
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
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
