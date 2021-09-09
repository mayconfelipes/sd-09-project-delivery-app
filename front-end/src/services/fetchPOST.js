import axios from 'axios';

const fetchPOST = async (endpoint, body) => {
  let result;
  const user = localStorage.getItem('user');

  const axioBody = { ...body };

  if (endpoint === 'login' || endpoint === 'users') {
    result = await axios.post(`http://localhost:3001/${endpoint}`, axioBody);
  } else {
    const axioHeader = {
      headers: {
        authorization: JSON.parse(user).token,
      },
    };
    result = await axios.post(`http://localhost:3001/${endpoint}`, axioBody, axioHeader);
  }

  const { data } = result;

  return data;
};

export default fetchPOST;
