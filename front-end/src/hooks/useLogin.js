import { useState } from 'react';
import axios from 'axios';

const initialData = {};

export default function useLogin() {
  const [login, setLoginData] = useState(initialData);

  async function setLogin(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: payload,
      });
      setLoginData({ login: true });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      setLoginData(error.response.data);
    }
  }

  console.log(login);
  return [login, setLogin];
}
