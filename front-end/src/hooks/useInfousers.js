import { useState } from 'react';
import axios from 'axios';

const useOrderDetails = () => {
  const [orderdetails, setOrderDetails] = useState([]);

  const setOrderDetail = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await axios({
        method: 'get',
        url: `http://localhost:3001/sales/${user.id}`,
        headers: { Authorization: user.token },
      });
      setOrderDetails(response.data);
    } catch (error) {
      setOrderDetails(error.response.data);
    }
  };

  return [orderdetails, setOrderDetail];
};

export default useOrderDetails;
