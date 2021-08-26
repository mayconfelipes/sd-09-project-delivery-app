const axios = require('axios');

const axiosApi = async (email, password) => {
  const token = await axios({
    method: 'POST',
    url: 'http://localhost:3001/login',
    headers: { 'Content-Type': 'application/json' },
    data: { email, password },
  });
  return token;
};

export default axiosApi;
