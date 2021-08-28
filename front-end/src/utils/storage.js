const USERDATA = 'userData';

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

module.exports = {
  getNameLocalStorage,
  getTokenLocalStorage,
  removeUserDataLocalStorage,
};
