import { useState, useEffect } from 'react';
import { fieldChangeHandler } from '../utils/handlers';
import { registerSchema, validateInfo } from '../utils/validateInfo';

const useRegisterInfo = () => {
  const [registerInfo, setRegisterInfo] = useState(() => ({
    name: '', email: '', password: '',
  }));
  const [isValidInfo, setInfoValidation] = useState(() => false);

  useEffect(
    () => {
      const { error } = validateInfo({ info: registerInfo, schema: registerSchema });
      setInfoValidation(!!error);
    }, [registerInfo],
  );

  const handleFieldsChange = fieldChangeHandler(setRegisterInfo);

  return [registerInfo, handleFieldsChange, isValidInfo];
};

export default useRegisterInfo;
