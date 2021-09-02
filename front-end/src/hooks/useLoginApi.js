import { useState, useCallback, useContext } from 'react';
import requestApi from '../services/api';
import { AppContext } from '../context';

const INVALID_USER_INFO_STATUS = 404;

const useLoginApi = () => {
  const [isValidLogin, setValidLogin] = useState(() => null);
  const { auth: { setAuthentication } } = useContext(AppContext);

  const loginUser = useCallback(
    async ({ email, password }) => {
      const { status } = await requestApi({
        method: 'post',
        data: { email, password },
        endpoint: 'login',
      });
      const isInvalidUserInfo = status === INVALID_USER_INFO_STATUS;
      setValidLogin(!isInvalidUserInfo);
      setAuthentication(!isInvalidUserInfo);
    },
    [],
  );

  return { isValidLogin, loginUser };
};

export default useLoginApi;
