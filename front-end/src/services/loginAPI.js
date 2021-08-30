const URLBase = 'http://localhost:3001';

export default {
  loginAPI: async (loginBody) => {
    try {
      const URL = `${URLBase}/login`;
      const requestOptions = {
        mode: 'cors',
        method: 'POST',
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
  },
  fetchProducts: async () => {
    try {
      const URL = `${URLBase}/products`;
      const requestOptions = {
        mode: 'cors',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
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
  },
};
