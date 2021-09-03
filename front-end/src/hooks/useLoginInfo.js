import { useState, useEffect } from 'react';
import { fieldChangeHandler } from '../utils/handlers';
import { loginSchema, validateInfo } from '../utils/validateInfo';

const useLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useState(() => ({ email: '', password: '' }));
  const [isValidInfo, setInfoValidation] = useState(() => false);

  useEffect(
    () => {
      const { error } = validateInfo({ info: loginInfo, schema: loginSchema });
      setInfoValidation(!!error);
    }, [loginInfo],
  );

  const handleFieldsChange = fieldChangeHandler(setLoginInfo);

  return { loginInfo, handleFieldsChange, isValidInfo };
};

export default useLoginInfo;
