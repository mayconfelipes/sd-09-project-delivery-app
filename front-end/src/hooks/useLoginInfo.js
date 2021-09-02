import { useState, useEffect } from 'react';
import Joi from 'joi';

const MIN_PASSWORD_LENGTH = 6;

const useLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useState(() => ({ email: '', password: '' }));
  const [isValidInfo, setInfoValidation] = useState(() => false);

  useEffect(
    () => {
      const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
      });
      const { error } = schema.validate(loginInfo);
      setInfoValidation(!!error);
    }, [loginInfo],
  );

  const handleFieldsChange = ({ target: { name, value } }) => {
    setLoginInfo((currentState) => ({ ...currentState, [name]: value }));
  };

  return { loginInfo, handleFieldsChange, isValidInfo };
};

export default useLoginInfo;
