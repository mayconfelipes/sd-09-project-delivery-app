import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [productsList, setProductsList] = useState([]);

  const context = { productsList, setProductsList };
  return (
    <main>
      <GlobalContext.Provider value={ context }>
        { children }
      </GlobalContext.Provider>
    </main>
  );
}

GlobalProvider.propTypes = { children: PropTypes.element }.isRequired;

export default GlobalProvider;
