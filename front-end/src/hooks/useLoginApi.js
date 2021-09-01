import { useState } from 'react';
import { PostLogin } from '../Services/Api';

const INVALID_USER_INFO_STATUS = 404;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => true);

  const loginUser = (userData) => async () => {
    console.log(userData, 'como esta vindo');
    const status = await PostLogin(userData);
    console.log('useLoginApi', status);
    const isInvalidUserInfo = status === INVALID_USER_INFO_STATUS;
    console.log('isInvalidUserInfo', isInvalidUserInfo);
    setValidLogin(true);
    // setValidLogin(!isInvalidUserInfo);
  };

  return { isValidLogin, loginUser };
};

export default useLoginApi;
