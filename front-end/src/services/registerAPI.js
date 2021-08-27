const registerAPI = async (myHeaders) => {
  const myInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  };

  console.log('ENTROU');
  const dataRegister = await fetch('localhost:3001/register', myInit);
  const response = await dataRegister.json();
  return response;
};

module.exports = {
  registerAPI,
};
