import axios from 'axios';

const url = 'http://localhost:3001';

export const login = async (email, password, successCb, errorCb) => {
  const body = { email, password };

  try {
    const { data } = await axios.post(`${url}/login`, body);

    errorCb('');
    successCb(data);
    return data;
  } catch (error) {
    const { data } = error.response;

    successCb('');
    errorCb(data);
    return data;
  }
};

export const register = async (name, email, password) => {
  const body = { name, email, password };

  try {
    const { data } = await axios.post(`${url}/user`, body);

    return data;
  } catch (error) {
    const { data } = error.response;

    return data;
  }
};

// export const getProducts = async () => {
//   try {
//     const { data } = await axios.get(`${url}/product`);

//     return data;
//   } catch (error) {
//     const { data } = error.response;

//     return data;
//   }
// }

export const getProducts = () => axios.get(`${url}/product`)
  .then(({ data }) => { console.log(data); return data; })
  .catch((error) => error.response.data);

export const getSalesBySeller = (id) => axios.get(`${url}/sale/seller/${id}`)
  .then(({ data }) => data);

export const getSale = (id) => axios.get(`${url}/sale/${id}`)
  .then(({ data }) => data)
  .catch((error) => error.response.data);
