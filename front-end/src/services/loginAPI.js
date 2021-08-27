const URLBase = 'http://localhost:3001';

const loginAPI = async (loginBody) => {
  try {
    const URL = `${URLBase}/login`;
    const requestOptions = {
      mode: 'cors',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginBody),
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
};

module.exports = {
  loginAPI,
};
