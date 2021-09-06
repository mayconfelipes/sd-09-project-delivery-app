import React, { useEffect, useContext } from 'react';
import NavBar from '../../../components/organisms/NavBar';

import { AppContext } from '../../../context';
import requestApi from '../../../services/api';
// import testIds from '../../../utils/testIds';

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
      <NavBar />
      <main>
        a
      </main>
    </>
  );
};

export default Products;
