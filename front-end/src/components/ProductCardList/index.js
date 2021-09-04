import React from 'react';
import { shape, number } from 'prop-types';
import './ProductCardList.css';
import { stringify } from 'postcss';

const ProductCardlist = ({ product, index, role }) => {
  console.log(index);
  return (
    <li className="li-detail-order">
      <span
        data-testid={ `${role}_order_details__element-order-table-item-number-${index}` }
      >
        { index }
      </span>
      <span data-testid={ `${role}_order_details__element-order-table-name-${index}` }>
        { product.name }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-quantity-${index}` }
      >
        { product.SalesProducts.quantity }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-unit-price-${index}` }
      >
        { `R$ ${product.price}` }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-total-price-${index}` }
      >
        { `R$ ${parseFloat(product.SalesProducts.quantity * product.price).toFixed(2)}` }
      </span>
    </li>
  );
};

// - 55: seller_order_details__element-order-details-label-delivery-status
// - 56: seller_order_details__element-order-details-label-order-date
// - 57: seller_order_details__button-preparing-check
// - 58: seller_order_details__button-dispatch-check
// - 59: seller_order_details__element-order-table-item-number-\<index>
// - 60: seller_order_details__element-order-table-name-\<index>
// - 61: seller_order_details__element-order-table-quantity-\<index>
// - 62: seller_order_details__element-order-table-unit-price-\<index>
// - 63: seller_order_details__element-order-table-sub-total-\<index>
// - 64: seller_order_details__element-order-total-price

ProductCardlist.propTypes = {
  product: shape().isRequired,
  index: number.isRequired,
  role: stringify.isRequired,
};

export default ProductCardlist;
