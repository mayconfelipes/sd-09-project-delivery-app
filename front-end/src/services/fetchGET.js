const axios = require('axios');

const fetchGET = async (endpoint) => {
  const token = localStorage.getItem('token');
  const result = await axios.get(endpoint, {
    headers: {
      authorization: token,
    },
  });
  const { data } = result;

  return data;
};

export default fetchGET;
