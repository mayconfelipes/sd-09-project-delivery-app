import axios from 'axios';

const PostLogin = async (userData) => {
  try {
    const result = await axios.post('http://localhost:3001/login', userData);
    return result;
  } catch (error) {
    return error.response;
  }
};

const PostClient = async () => {
  try {
    console.log('FRONT_END Adicionando Usuario ');
    const result = await axios.post('http://localhost:3001/user');
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { PostClient, PostLogin };
