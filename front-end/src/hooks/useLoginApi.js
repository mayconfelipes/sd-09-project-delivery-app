import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import { AppContext } from '../context';
import { storeUserData } from '../utils/storage';
import decodeUserInfo from '../utils/decodeUserInfo';

const VALID_LOGIN_STATUS = 200;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => null);
  const { auth: { setAuthentication }, user: { setUserData } } = useContext(AppContext);

  const loginUser = useCallback(
    async ({ email, password }) => {
      const requestData = {
        method: 'post',
        data: { email, password },
        endpoint: 'login',
      };

      const response = await requestApi(requestData);

      const isValidLoginStatus = response.status === VALID_LOGIN_STATUS;

      if (isValidLoginStatus) {
        const userData = decodeUserInfo(response.data.token);
        storeUserData(userData);
        setUserData(userData);
      }

      setValidLogin(isValidLoginStatus);
      setAuthentication(isValidLoginStatus);
    },
    [],
  );

  return { isValidLogin, loginUser };
};

export default useLoginApi;
