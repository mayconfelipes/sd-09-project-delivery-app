import React, { useContext } from 'react';
import { string, number, shape } from 'prop-types';
import AppContext from '../hooks/context';

function OrderProducts({ data }) {
  const { name, index, quantity, price } = data;
  const { user } = useContext(AppContext);
  console.log(user);

  const createSpan = (dataTestId, value) => (
    <span
      data-testid={ `customer_order_details__element-order-table-${dataTestId}` }
    >
      {value}
    </span>
  );

  const itemNumber = (indexNumber) => {
    indexNumber += 1;
    return indexNumber;
  };

  // const calcTotalPrice = (subtotal) => {
  //   total += subtotal;
  // };

  // const formatPrice = (priceProduct) => priceProduct.replace(/\./ig, ',');

  // const calcSubTotal = () => {
  //   const subtotal = Number(price * quantity);
  //   calcTotalPrice(subtotal);
  //   return formatPrice(subtotal.toFixed(2));
  // };

  const generateDataTestId = (flag) => (
    `customer_order_details__element-order-details-label-${flag}`);

  return (
    <section>
      <header>
        <h1 data-testid={ generateDataTestId('order-id') }>PEDIDO 0003</h1>
        <p data-testid={ generateDataTestId('seller-name') }>P. Vend: Fulana Pereira</p>
        <p data-testid={ generateDataTestId('order-date') }>07/04/2021</p>
        <p data-testid={ generateDataTestId('delivery-status') }>ENTREGUE</p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </header>
      <main>
        { createSpan('item-number', itemNumber(index)) }
        { createSpan(`name-${index}`, name) }
        { createSpan(`quantity-${index}`, quantity) }
        { createSpan(`unit-price-${index}`, price) }
        { createSpan(`sub-total-${index}`, price) }
      </main>
      <p data-testid="customer_order_details__element-order-total-price">Total</p>
    </section>
  );
}

OrderProducts.propTypes = {
  data: shape({
    name: string.isRequired,
    price: number.isRequired,
    quantity: number.isRequired,
    index: number.isRequired,
  }).isRequired,
};

export default OrderProducts;
