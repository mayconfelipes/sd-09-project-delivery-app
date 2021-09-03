import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import decodeUserInfo from '../utils/decodeUserInfo';
import { AppContext } from '../context';
import { storeUserData } from '../utils/storage';

const VALID_REGISTRATION_STATUS = 201;

const useRegisterApi = () => {
  const [isValidRegistration, setValidRegistration] = useState(() => null);
  const { auth: { setAuthentication }, user: { setUserData } } = useContext(AppContext);

  const registerUser = useCallback(
    async ({ name, email, password }) => {
      const requestData = {
        method: 'post',
        data: { name, email, password, role: 'customer' },
        endpoint: 'register',
      };

      const response = await requestApi(requestData);

      const isValidRegistrationStatus = response.status === VALID_REGISTRATION_STATUS;

      if (isValidRegistrationStatus) {
        const userData = decodeUserInfo(response.data.token);
        storeUserData(userData);
        setUserData(userData);
      }

      setValidRegistration(isValidRegistrationStatus);
      setAuthentication(isValidRegistrationStatus);
    },
    [],
  );

  return { isValidRegistration, registerUser };
};

export default useRegisterApi;
