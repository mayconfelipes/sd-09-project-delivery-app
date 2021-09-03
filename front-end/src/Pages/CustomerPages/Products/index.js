import React, { useEffect, useContext } from 'react';

import { AppContext } from '../../../context';
import requestApi from '../../../services/api';
import testIds from '../../../utils/testIds';

const Products = () => {
  const { auth: { token } } = useContext(AppContext);

  useEffect(() => {
    // adm@deliveryapp.com
    // --adm2@21!!--
    const foo = async () => {
      const response = await requestApi(
        { method: 'get', endpoint: 'customer/products', token },
      );
      console.log(response);
    };
    foo();
  }, [token]);
  return (
    <>
      <header>
        <nav>
          <a href="/" data-testid={ testIds.id11 }>a</a>
          <a href="/" data-testid={ testIds.id12 }>a</a>
        </nav>
        <div>
          <div data-testid={ testIds.id13 }>a</div>
          <a href="/" data-testid={ testIds.id14 }>a</a>
        </div>
      </header>
      <main>
        a
      </main>
    </>
  );
};

export default Products;
