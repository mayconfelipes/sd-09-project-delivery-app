import axios from 'axios';

const url = 'http://localhost:3001';

export const login = async (email, password, successCb, errorCb) => {
  const body = { email, password };

  try {
    const { data } = await axios.post(`${url}/login`, body);

    errorCb('');
    return successCb(data);
  } catch (error) {
    const { data } = error.response;

    successCb('');
    return errorCb(data);
  }
};

export const register = () => {};
