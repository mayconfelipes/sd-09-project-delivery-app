import { useState } from 'react';
import axios from 'axios';

const initialData = {};

export default function useLogin() {
  const [data, setData] = useState(initialData);

  async function setLogin(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: payload,
      });
      setData({ login: true });
      localStorage.setItem('token', JSON.stringify(response.data));
    } catch (error) {
      setData(error.response.data);
    }
  }

  return [data, setLogin];
}
