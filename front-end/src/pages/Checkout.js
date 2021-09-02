import React, { useContext } from 'react';
import CheckoutCard from '../components/CheckoutCard';
import NavBar from '../components/NavBar';
import { LoginContext } from '../context/loginContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, setCart, name, role } = useContext(LoginContext);
  return (
    <div className="Checkout-main-wrapper">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <footer>
        <h3>Finalizar Pedido</h3>
        <CheckoutCard cart={ cart } setCart={ setCart } />
      </footer>
    </div>
  );
};

export default Checkout;
