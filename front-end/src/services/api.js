import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const registerUser = async (name, email, password) => {
  const newUser = await axios
    .post(`${baseURL}/register`, {
      name,
      email,
      password,
    });
  return newUser;
};

export const loginUser = async (email, password) => {
  const loggedUser = await axios
    .post(`${baseURL}/login`, {
      email,
      password,
    });
  return loggedUser;
};
