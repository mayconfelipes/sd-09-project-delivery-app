const URLBase = 'http://localhost:3001';

const registerAPI = async (registeBody) => {
  try {
    const URL = `${URLBase}/register`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registeBody),
    };
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    const errorObj = {
      message: 'something bad happened here',
      error: error.message,
      status: 500,
    };
    console.log(errorObj);
  }

  // console.log('ENTROU');
  // const dataRegister = await fetch('localhost:3001/register', myInit);
  // const response = await dataRegister.json();
  // return response;
};

module.exports = {
  registerAPI,
};
