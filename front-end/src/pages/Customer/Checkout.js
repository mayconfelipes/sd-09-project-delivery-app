import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton, createDropDown } from '../../utils/creators';

const route = 'customer_checkout';

function Checkout() {
  const [state, setState] = useState({ address: '', addressNumber: '' });
  // const [validLogin, setValidLogin] = useState(false);

  const handleChange = ({ target: { type, value } }) => {
    setState({ ...state, [type]: value });
  };

  return (
    <section>
      <h1>CHECKOUT</h1>
      <p data-testid={ `${route}__element-order-total-price` }>order total price</p>
      { createDropDown('seller', [], () => {}, route) }
      { createInput('address', 'text', handleChange, route) }
      { createInput('addressNumber', 'text', handleChange, route) }
      { createButton('submit-order', 'submit order', () => {}, route)}
    </section>
  );
}

export default Checkout;
