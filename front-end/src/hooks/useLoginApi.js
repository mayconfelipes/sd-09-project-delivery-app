import { useState } from 'react';
import { PostLogin } from '../services/api';

const INVALID_USER_INFO_STATUS = 404;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => true);

  const loginUser = async (userData) => {
    const { status } = await PostLogin(userData);
    // console.log('useLoginApi', status);
    const isInvalidUserInfo = status === INVALID_USER_INFO_STATUS;
    // console.log('isInvalidUserInfo', isInvalidUserInfo);
    setValidLogin(!isInvalidUserInfo);
  };

  return { isValidLogin, loginUser };
};

export default useLoginApi;
