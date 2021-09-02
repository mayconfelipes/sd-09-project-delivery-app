import { useState } from 'react';
import axios from 'axios';

export default function useLogin() {
  const [data, setData] = useState({});

  async function setLogin(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: payload,
      });
      setData({ login: true });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      setData(error.response.data);
    }
  }

  return [setLogin, data];
}
