const getNameLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData.name) { return userData.name; }
  return 'sem nome cadastrado';
};

module.exports = { getNameLocalStorage };
