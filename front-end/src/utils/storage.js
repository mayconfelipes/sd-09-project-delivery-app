const getUserDataLocalStorage = () => JSON.parse(localStorage.getItem('userData'));

const getNameLocalStorage = () => {
  const userData = getUserDataLocalStorage();
  if (userData.name) { return userData.name; }
  return 'sem nome cadastrado';
};

const getTokenLocalStorage = () => {
  const userData = getUserDataLocalStorage();
  return userData.token ? userData.token : '';
};

module.exports = { getNameLocalStorage, getTokenLocalStorage };
