import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import { AppContext } from '../context';
import { storeUserData } from '../utils/storage';

const VALID_LOGIN_STATUS = 200;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => null);
  const { auth: { setAuthentication, setToken } } = useContext(AppContext);

  const loginUser = useCallback(
    async ({ email, password }) => {
      const response = await requestApi({
        method: 'post',
        data: { email, password },
        endpoint: 'login',
      });
      console.log(response);
      const isValidLoginStatus = response.status === VALID_LOGIN_STATUS;
      setValidLogin(isValidLoginStatus);
      setAuthentication(isValidLoginStatus);
      if (isValidLoginStatus) {
        setToken(response.data.token);
        storeUserData(response.data);
      }
    },
    [],
  );

  return { isValidLogin, loginUser };
};

export default useLoginApi;
