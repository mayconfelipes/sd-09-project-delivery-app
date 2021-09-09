import axios from 'axios';

const fetchGET = async (endpoint) => {
  const user = localStorage.getItem('user');

  const result = await axios.get(`http://localhost:3001/${endpoint}`, {
    headers: {
      authorization: JSON.parse(user).token,
    },
  });
  const { data } = result;

  return data;
};

export default fetchGET;
