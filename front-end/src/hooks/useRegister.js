import { useState } from 'react';
import axios from 'axios';

const initialData = {};

export default function useRegister() {
  const [data, setData] = useState(initialData);

  async function setRegister(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/user',
        data: payload,
      });
      setData({ register: true });
      localStorage.setItem('token', JSON.stringify(response.data));
    } catch (error) {
      setData(error.response.data);
    }
  }

  return [setRegister, data];
}
