import { useState } from 'react';
import axios from 'axios';

const useSellers = () => {
  const [sellers, setDataSellers] = useState();

  const setSellers = async (token) => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/users/sellers',
        headers: { Authorization: token },
      });
      setDataSellers(response.data);
    } catch (error) {
      setDataSellers(error.response.data);
    }
  };

  return [sellers, setSellers];
};

export default useSellers;
