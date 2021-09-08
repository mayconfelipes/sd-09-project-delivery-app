const storeData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key) => {
  const data = localStorage.getItem(key) || null;
  return JSON.parse(data);
};

const removeData = (key) => { localStorage.removeItem(key); };

export const storeUserData = (userData) => { storeData('user', userData); };

export const getUserData = () => getData('user') || {};

export const removeUserData = () => { removeData('user'); };

export const storeCartData = (userData) => { storeData('carrinho', userData); };

export const getCartData = () => getData('carrinho') || {};

export const removeCartData = () => { removeData('carrinho'); };
