import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import { AppContext } from '../context';
import { storeUserData } from '../utils/storage';
import decodeUserInfo from '../utils/decodeUserInfo';

const useAuthentication = () => {
  const [isValidRequest, setValidRequest] = useState(() => null);
  const { auth: { setAuthentication }, user: { setUserData } } = useContext(AppContext);

  const requestUser = useCallback(
    async ({ validStatus, data, endpoint }) => {
      const requestData = {
        method: 'post',
        data,
        endpoint,
      };

      const response = await requestApi(requestData);

      const isValidRequestStatus = response.status === validStatus;

      if (isValidRequestStatus) {
        const { token } = response.data;
        const userData = { ...decodeUserInfo(token), token };
        storeUserData(userData);
        setUserData(userData);
      }

      setValidRequest(isValidRequestStatus);
      setAuthentication(isValidRequestStatus);
    },
    [],
  );

  return { isValidRequest, requestUser };
};

export default useAuthentication;
