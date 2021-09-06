const URLBase = 'http://localhost:3001';

const salesOrdersAPI = async (params) => {
  try {
    const URL = `${URLBase}/seller/details/${params}`;
    const requestOptions = {
      method: 'GET',
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

export default salesOrdersAPI;
