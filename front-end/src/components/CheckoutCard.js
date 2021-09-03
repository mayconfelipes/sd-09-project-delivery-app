import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import './CheckoutCard.css';

const CheckoutCard = ({ cart, setCart }) => {
  const [currSeller, setCurrSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [allSellers, setAllSellers] = useState([]);
  const removeProduct = ({ target }) => {
    const newCart = cart.filter((element) => {
      const currProdId = target.getAttribute('curr-prod-id');
      return element.id !== Number(currProdId);
    });
    setCart(newCart);
  };

  const theHeaders = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  };
  // parei aqui, fará a requisição pra encontrar todos os sellers e povoar o array
  // apenas para identificar o useRef sendo usado no preço total
  const orderTotalPrice = useRef();
  return (
    /* A ordem pt 01 */
    <div className="CheckoutCard-wrapper-table">
      {console.log(theHeaders)}
      <table className="CheckoutCard-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { element.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { element.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { String(element.price.toFixed(2)).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { String((Number(element.price) * Number(element.quantity)).toFixed(2))
                  .replace('.', ',') }
              </td>
              <button
                curr-prod-id={ element.id }
                onClick={ removeProduct }
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                Remover
              </button>
            </tr>
          )) }
        </tbody>
      </table>
      <h4
        ref={ orderTotalPrice }
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total Price: 
        ${String((cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
      .toFixed(2)))
      .replace('.', ',')
    }` }
      </h4>
      {/* Fim da ordem pt 01 */ }
      {/* Começo ordem pt 02 */ }
      <fieldset className="CheckoutCard-form-container">
        <legend>Detalhes do endereço</legend>
        <div className="Checkout-select-input">
          <p>P/ Vendedora Responsável:</p>
          <select
            value={ currSeller }
            onChange={ (e) => setCurrSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"
            name="currSeller"
          >
            { allSellers.map((element, index) => (
              <option
                key={ index }
              >
                { element.id }
              </option>
            )) }
          </select>
        </div>
        <label htmlFor="adress">
          Endereço:
          <input
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
        </label>
        { console.log(allSellers, typeof (setAllSellers)) }
      </fieldset>
      {/* Fim ordem pt 02 */ }
    </div>
  );
};

CheckoutCard.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CheckoutCard;
