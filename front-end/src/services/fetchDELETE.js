import axios from 'axios';

const fetchDELETE = async (endpoint) => {
  const user = localStorage.getItem('user');
  await axios.delete(`http://localhost:3001/${endpoint}`, {
    headers: {
      authorization: JSON.parse(user).token,
    },
  });
};

export default fetchDELETE;
