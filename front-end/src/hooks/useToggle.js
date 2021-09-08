import { useState, useCallback } from 'react';

const useToggle = (initialState) => {
  const [state, setState] = useState(() => initialState);
  const toggle = useCallback(() => setState((currentState) => !currentState), []);
  return [state, toggle];
};

export default useToggle;
