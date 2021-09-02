import React, { useContext } from 'react';
import Context from '../../context';
import OrderTable from '../../components/orderTable';

const CheckOut = () => {
  const { cart } = useContext(Context);
  console.log(cart);

  return (
    <div>
      <p>Blá, blá</p>
      <OrderTable />
    </div>
  );
};

export default CheckOut;
