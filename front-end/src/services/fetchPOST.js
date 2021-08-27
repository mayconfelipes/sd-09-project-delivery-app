const axios = require('axios');

const fetchPOST = async (endpoint, body) => {
  const result = await axios.post(endpoint, { ...body });
  const { data } = result;

  return data;
};

export default fetchPOST;
