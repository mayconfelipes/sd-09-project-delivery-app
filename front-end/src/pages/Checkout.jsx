import React, { useState } from 'react';
// import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import styles from '../css/Checkout.module.css';
// import '../App.css';

function Checkout() {
  // const { productsCart } = useContext(AppContext);
  const INITIAL_STATE = { seller: '', address: '', numberHouse: '' };
  const [detailsForm, setDetailsForm] = useState(INITIAL_STATE);
  let total = 0;

  const orders = Object.values(JSON.parse(localStorage.getItem('productCart')))
    .filter(({ quantity }) => quantity > 0);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDetailsForm({ ...detailsForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataSend = detailsForm;
    console.log(dataSend);
  };

  const itemNumber = (index) => {
    index += 1;
    return index;
  };

  const calcTotalPrice = (subtotal) => {
    total += subtotal;
  };

  const formatPrice = (price) => price.replace(/\./ig, ',');

  const calcSubTotal = (price, quantity) => {
    const subtotal = Number(price * quantity);
    calcTotalPrice(subtotal);
    return formatPrice(subtotal.toFixed(2));
  };

  const createSpan = (dataTestId, value) => (
    <span
      data-testid={ `customer_checkout__element-order-table-${dataTestId}` }
    >
      {value}
    </span>
  );

  console.log(orders);

  return (
    <div className="main">
      <Navbar />
      <section className={ styles.productsContainer }>
        <h3>Finalizar Pedido</h3>
        { orders.map(({ name, price, quantity }, index) => (
          <div
            key={ name }
            data-testid={ `element-order-table-name-${index}` }
            className={ styles.products }
          >
            { createSpan(`item-number-${index}`, itemNumber(index)) }
            { createSpan(`name-${index}`, name) }
            { createSpan(`quantity-${index}`, quantity) }
            { createSpan(`unit-price-${index}`, formatPrice(price)) }
            { createSpan(`sub-total-${index}`, calcSubTotal(price, quantity)) }
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              Remover
            </button>
          </div>))}
        <div
          data-testid="customer_checkout__element-order-total-price"
        >
          { formatPrice(total.toFixed(2)) }
        </div>
      </section>
      <section className={ styles.formCheckoutContainer }>
        <h3>Detalhes e Endereço para entrega</h3>
        <form>
          <select
            id="seller"
            name="seller"
            value={ detailsForm.seller }
            data-testid="customer_checkout__select-seller"
            onChange={ handleChange }
          >
            <option value="fulana 1">Vendedora 1</option>
            <option value="fulana 2">Vendedora 2</option>
            <option value="fulana 3">Vendedora 3</option>
          </select>
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            placeholder="Seu endereço"
            value={ detailsForm.address }
            onChange={ handleChange }
            name="address"
          />
          <input
            type="number"
            data-testid="customer_checkout__input-addressNumber"
            placeholder="Número da casa"
            value={ detailsForm.numberHouse }
            onChange={ handleChange }
            name="numberHouse"
          />

          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleSubmit }
          >
            Finalizar Pedido
          </button>
        </form>
      </section>
    </div>
  );
}

export default Checkout;
