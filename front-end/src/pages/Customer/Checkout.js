import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { createInput, createButton, createDropDown } from '../../utils/creators';
// import { CustomerContext } from '../../context/CustomerContext';
import CheckoutTable from '../../components/Customer/CheckoutTable';
import { address, addressNumber } from '../../data/InputOptions';
import { submitOrder } from '../../data/ButtonOptions';

const route = 'customer_checkout';

function Checkout() {
  const [state, setState] = useState({ address: '', addressNumber: '' });
  // const [validLogin, setValidLogin] = useState(false);

  const cart = JSON.parse(localStorage.cart) || [];
  const total = JSON.parse(localStorage.total) || 0;

  console.log({ cart, total });

  const handleChange = ({ target: { type, value } }) => {
    setState({ ...state, [type]: value });
  };

  return (
    <section>
      <Navbar />
      <CheckoutTable cart={ cart } />
      <h1>CHECKOUT</h1>
      <p>
        R$
        <span data-testid={ `${route}__element-order-total-price` }>
          { total.replace(/\./, ',') }
        </span>
      </p>
      { createDropDown('seller', [], () => {}, route) }
      { createInput({ ...address, onChange: handleChange, route }) }
      { createInput({ ...addressNumber, onChange: handleChange, route }) }
      { createButton({ ...submitOrder, onClick: () => {}, route })}
    </section>
  );
}

export default Checkout;
