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
    console.log('result.code', result.code);
    console.log('result', result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

/*
      "email": "fulana@deliveryapp.com",
      "password": "fulana@123" */

const PostRegister = async (data) => {
  try {
    console.log('FRONT_END Adicionando Usuario ');
    const result = await Axios.post('http://localhost:3001/register', data);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { PostRegister, PostLogin };
