import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './OrderCard.css';

const dataTestId = require('../../utills/dataTestIds');

const OrderCard = (props) => {
  const history = useHistory();
  const { order, index } = props;
  const orderId = index + 1;
  const { id, status, saleDate, totalPrice } = order;
  const split = saleDate.split('T')[0].split('-');
  const formattedDate = `${split[2]}/${split[1]}/${split[0]}`;
  const brazilianPrice = (value) => {
    const minN = 3;
    if (typeof value === 'number') value = value.toFixed(2);
    const newPrice = value.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };
  return (
    <div className="order-card-main">
      <button
        className="order-card-button"
        type="button"
        onClick={ () => history.push(`/customer/orders/${id}`) }
      >
        <p
          className="order-card-button-id"
          data-testid={ `${dataTestId[33] + orderId}` }
        >
          {orderId}
        </p>
        <p
          className="order-card-button-item"
          data-testid={ `${dataTestId[34] + orderId}` }
        >
          {status}
        </p>
        <p
          className="order-card-button-item"
          data-testid={ `${dataTestId[35] + orderId}` }
        >
          {formattedDate}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${orderId}` }>
          {brazilianPrice(totalPrice)}
        </p>
      </button>

    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.number,
}.isRequired;

export default OrderCard;
