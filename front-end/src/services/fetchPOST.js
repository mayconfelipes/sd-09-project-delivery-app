const axios = require('axios');

const fetchPOST = async (endpoint, body) => {
  const result = await axios.post(`http://localhost:3001/${endpoint}`, { ...body });
  const { data } = result;

  return data;
};

export default fetchPOST;
