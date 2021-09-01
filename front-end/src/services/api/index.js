import axios from 'axios';

// export async function loginAxio(data) {
//   const result = await axios.post('https://localhost:3000/login', data);
//   console.log('FRONT_END inciando login ', result);
//   console.log(result);
//   return result;
// }

const PostLogin = async (userData) => {
  try {
    console.log('FRONT_Adicionando Login');
    const result = await axios.post('http://localhost:3001/login', userData);
    return result;
  } catch (error) {
    return error.response;
  }
};

/*    "email": "fulana@deliveryapp.com",
      "password": "fulana@123" */

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
