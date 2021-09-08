import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Navbar, CustomerCheckoutTable } from '../../components';
import { address, addressNumber } from '../../data/InputOptions';
import { submitOrder } from '../../data/ButtonOptions';
import { getUsers, createSale } from '../../services/api';
import { createInput, createButton } from '../../utils/creators';
import { formatPrice } from '../../utils/format';

const route = 'customer_checkout';

function Checkout() {
  const [state, setState] = useState({ address: '', addressNumber: '', seller: 2 });
  const [cart, setCart] = useState(JSON.parse(localStorage.cart) || []);
  const [sellers, setSellers] = useState([]);
  const [redirect, setRedirect] = useState();

  const total = JSON.parse(localStorage.cart).reduce((sum, { price, quantity }) => {
    sum += (price * quantity);
    return sum;
  }, 0).toFixed(2);

  useEffect(() => {
    const fechData = async () => {
      const data = await getUsers();
      setSellers(data.filter(({ role }) => role === 'seller'));
    };
    fechData();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const removeItem = (id) => {
    const arr = cart.filter((e) => e.id !== id);
    localStorage.cart = JSON.stringify(arr);
    setCart(arr);
  };

  const onClick = async () => {
    const body = {
      userId: JSON.parse(localStorage.user).id,
      sellerId: state.seller,
      totalPrice: total,
      deliveryAddress: state.address,
      deliveryNumber: state.addressNumber,
      cart: cart.map(({ id, quantity }) => ({ productId: id, quantity })),
    };
    const data = await createSale(body);
    setRedirect(data.id);
  };

  if (redirect) return <Redirect to={ `/customer/orders/${redirect}` } />;

  return (
    <section>
      <Navbar />
      <CustomerCheckoutTable cart={ cart } removeFn={ removeItem } />
      <h1>CHECKOUT</h1>
      <p>
        R$
        <span data-testid={ `${route}__element-order-total-price` }>
          { formatPrice(total) }
        </span>
      </p>
      <select
        data-testid={ `${route}__select-seller` }
        id="seller"
        name="seller"
        onChange={ handleChange }
      >
        { sellers.map(({ id, name }) => (
          <option key={ id } value={ id }>{ name }</option>
        ))}
      </select>
      { createInput({ ...address, onChange: handleChange, route }) }
      { createInput({ ...addressNumber, onChange: handleChange, route }) }
      { createButton({ ...submitOrder, onClick, route })}
    </section>
  );
}

export default Checkout;
