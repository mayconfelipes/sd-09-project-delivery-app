import React, { useState, useContext } from 'react';
import P from 'prop-types';
import GlobalContext from './context';

export const GlobalStateProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState({});
  // useEffect(() => {
  //   console.log(cartQuantity); setCartQuantity({ ...cartQuantity });
  // }, [cartQuantity]);
  return (
    <GlobalContext.Provider
      value={
        { setCartQuantity, cartQuantity }
      }
    >
      { children }
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

GlobalStateProvider.propTypes = {
  children: P.node.isRequired,
};

export default useGlobalContext;
