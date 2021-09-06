const URLBase = 'http://localhost:3001';
const applicationJson = 'application/json';

const salesOrdersAPI = async (saleBody, user) => {
  try {
    const URL = `${URLBase}/${user}/orders`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': applicationJson },
      body: JSON.stringify(saleBody),
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

const createNewSale = async (newSaleInfos, token) => {
  try {
    const URL = `${URLBase}/new/sale`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': applicationJson, authorization: token },
      body: JSON.stringify(newSaleInfos),
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

const createSalesProducts = async (newSaleInfosForSalesProducts, token) => {
  try {
    const URL = `${URLBase}/new/sales-products`;
    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': applicationJson, authorization: token },
      body: JSON.stringify(newSaleInfosForSalesProducts),
    };
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    const errorObj = {
      message: 'something bad happened here!',
      error: error.message,
      status: 500,
    };
    console.log(errorObj);
  }
};

export {
  createNewSale,
  salesOrdersAPI,
  createSalesProducts,
};
