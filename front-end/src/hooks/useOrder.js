import { useState } from 'react';
import axios from 'axios';

export default function useOrder() {
  const [order, setOrderData] = useState({});

  async function setOrder(evt, payload) {
    evt.preventDefault();
    const { token, ...data } = payload;

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/sales',
        headers: { Authorization: token },
        data,
      });
      setOrderData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
      setOrderData(error.response);
    }
  }

  return [order, setOrder];
}
