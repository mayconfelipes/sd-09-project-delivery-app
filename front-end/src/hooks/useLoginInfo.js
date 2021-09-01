import { useState } from 'react';

const useLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useState(() => ({ email: '', password: '' }));
  const handleFieldsChange = ({ target: { name, value } }) => {
    setLoginInfo((currentState) => ({ ...currentState, [name]: value }));
  };

  return [loginInfo, handleFieldsChange];
};

export default useLoginInfo;
