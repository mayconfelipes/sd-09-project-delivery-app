import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import { AppContext } from '../context';
import { storeUserData } from '../utils/storage';
import httpStatusCodes from '../../../back-end/src/api/utils/httpStatusCodes';

const VALID_LOGIN_STATUS = httpStatusCodes.ok;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => null);
  const { auth: { setAuthentication, setToken } } = useContext(AppContext);

  const loginUser = useCallback(
    async ({ email, password }) => {
      const requestData = {
        method: 'post',
        data: { email, password },
        endpoint: 'login',
      };

      const response = await requestApi(requestData);

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
