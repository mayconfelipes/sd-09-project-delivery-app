import { useState, useCallback } from 'react';
import requestApi from '../services/api';
import { storeUserData } from '../utils/storage';
import decodeUserInfo from '../utils/decodeUserInfo';
import { useAuthActionContext, useUserActionContext } from '../context/contexts';

const useAuthentication = () => {
  const [isValidRequest, setValidRequest] = useState(() => null);
  const setAuthentication = useAuthActionContext();
  const setUserData = useUserActionContext();

  const requestUser = useCallback(
    async ({ validStatus, data, endpoint }) => {
      const requestData = { method: 'post', data, endpoint };

      const response = await requestApi(requestData);

      const isValidRequestStatus = response.status === validStatus;

      if (isValidRequestStatus) {
        const { token } = response.data;
        const { data: tokenData } = decodeUserInfo(token);
        const userData = { ...tokenData, token };
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
