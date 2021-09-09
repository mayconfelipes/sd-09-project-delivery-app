import { useState } from 'react';
import axios from 'axios';

export default function useOrder() {
  const [order, setOrderData] = useState({});

  async function setOrder(payload) {
    const { token, ...data } = payload;
    console.log(data);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/sales',
        headers: { Authorization: token },
        data,
      });
      setOrderData(response.data);
    } catch (error) {
      setOrderData(error.response);
    }
  }

  return [order, setOrder];
}
