export const storeUserData = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUserData = () => {
  const userData = localStorage.getItem('user') || 'null';
  return JSON.parse(userData);
};
