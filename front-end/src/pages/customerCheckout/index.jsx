import React, { useContext } from 'react';
import Context from '../../context';

const CheckOut = () => {
  const { cart } = useContext(Context);
  console.log(cart);
  return (
    <div>
      <p>Blá, blá</p>
    </div>
  );
};

export default CheckOut;
