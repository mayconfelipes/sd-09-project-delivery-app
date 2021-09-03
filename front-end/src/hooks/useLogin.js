import { useState } from 'react';
import axios from 'axios';

export default function useLogin() {
  const [data, setData] = useState({});

  const rolePath = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  async function setLogin(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: payload,
      });
      setData({ path: rolePath[response.data.role] });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      setData(error.response.data);
    }
  }

  return [data, setLogin];
}
