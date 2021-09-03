import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'seller_order_details';

function OrderDetailsTable({ item, index }) {
  return (
    <section>
      <p
        data-testid={ `${route}__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </p>
      <p data-testid={ `${route}__element-order-table-name-${index}` }>{ item.name }</p>
      <p
        data-testid={ `${route}__element-order-table-quantity-${index}` }
      >
        { item.SalesProduct.quantity }
      </p>
      <p
        data-testid={ `${route}__element-order-table-unit-price-${index}` }
      >
        { `R$ ${item.price}` }
      </p>
      <p
        data-testid={ `${route}__element-order-table-sub-total-${index}` }
      >
        { `R$ ${item.SalesProduct.quantity * +item.price}` }
      </p>

    </section>
  );
}

OrderDetailsTable.propTypes = {
  item: PropTypes.shape(),
  index: PropTypes.number,
}.isRequired;

export default OrderDetailsTable;
