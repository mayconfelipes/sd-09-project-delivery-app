import React, { useContext } from 'react';
import { string, number, shape } from 'prop-types';
import AppContext from '../hooks/context';

function OrderProducts({ data }) {
  const { name, index, quantity, price } = data;
  const { user } = useContext(AppContext);
  console.log(user);
  console.log(quantity);

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

  return (
    <section>
      <main>
        { createSpan('item-number', itemNumber(index)) }
        { createSpan(`name-${index}`, name) }
        { createSpan(`quantity-${index}`, quantity) }
        { createSpan(`unit-price-${index}`, price) }
        { createSpan(`sub-total-${index}`, price) }
      </main>
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
