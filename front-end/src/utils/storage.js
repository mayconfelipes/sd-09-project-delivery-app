const USERDATA = 'userData';
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
  const index = cart.findIndex(({ id }) => id === productData.id);
  if (index > INVALIDINDEX) {
    cart[index] = productData; // subtitui os dados da posição, pelos atualizados
  } else {
    cart.push(productData);
  }
  localStorage.setItem('carrinho', JSON.stringify(cart));
};

const removeCarrinhoLocalStorage = () => localStorage.removeItem('carrinho');

module.exports = {
  getNameLocalStorage,
  getTokenLocalStorage,
  removeUserDataLocalStorage,
  setCarrinhoLocalStorage,
  getCarrinhoLocalStorage,
  removeCarrinhoLocalStorage,
};
