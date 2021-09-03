import React, { useContext } from 'react';
import Context from '../../context';
import Navbar from '../../components/navbar';
import OrderTable from '../../components/orderTable';

const CheckOut = () => {
  const { cart } = useContext(Context);
  console.log(cart);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PRODUTOS /customer_products__element-navbar-link-products',
    'MEUS PEDIDOS/customer_products__element-navbar-link-orders',
  ];
  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <p>Blá, blá</p>
      <OrderTable />
    </div>
  );
};

export default CheckOut;
