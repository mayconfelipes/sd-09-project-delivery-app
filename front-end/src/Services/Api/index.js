import Axios from 'axios';

export async function loginAxio(data) {
  const result = await Axios.post('https://localhost:3000/login', data);
  console.log('FRONT_END inciando login ', result);
  console.log(result);
  return result;
}

export async function insertClient(data) {
  const result = await Axios.post('https://localhost:3000/', data);
  console.log('FRONT_END Adicionando ', result);
  console.log(result);
  return result;
}
const requestAllCount = async () => {
  try {
    const { data } = await Axios.get('https://localhost:3000/');
    // console.log("FRONT_END BUSCANDO TODOS", data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const requestAllClient = async () => {
  try {
    const { data } = await Axios.get('https://localhost:3000/client');
    // console.log("FRONT_END BUSCANDO TODOS", data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const PostCount = async () => {
  try {
    const result = await Axios.post('https://localhost:3000//conta');
    console.log('FRONT_Adicionando Valor', result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

const PostClient = async () => {
  try {
    const result = await Axios.post('https://localhost:3000/client');
    console.log('FRONT_END Adicionando ', result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { requestAllCount, requestAllClient, PostClient, PostCount };
