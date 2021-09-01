import Axios from 'axios';

// export async function loginAxio(data) {
//   const result = await Axios.post('https://localhost:3000/login', data);
//   console.log('FRONT_END inciando login ', result);
//   console.log(result);
//   return result;
// }

const PostLogin = async (data) => {
  try {
    console.log('FRONT_Adicionando Login');
    const result = await Axios.post('http://localhost:3001/login', data);
    console.log('retorno data', result.status);
    console.log('retorno aeeaeae', result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

/*    "email": "fulana@deliveryapp.com",
      "password": "fulana@123" */

const PostClient = async () => {
  try {
    console.log('FRONT_END Adicionando Usuario ');
    const result = await Axios.post('http://localhost:3001/user');
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { PostClient, PostLogin };
