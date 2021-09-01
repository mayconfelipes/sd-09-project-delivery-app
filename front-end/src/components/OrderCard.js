import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderCard extends React.Component {
  constructor() {
    super();

    this.dateFormat = this.dateFormat.bind(this);
  }

  dateFormat(date) {
    const num10 = 10;
    const num8 = 8;
    const num5 = 5;
    const num4 = 4;
    date = date.substr(0, num10);

    const day = date.substr(num8, 2);
    const month = date.substr(num5, 2);
    const year = date.substr(0, num4);

    const newDate = `${day}/${month}/${year}`;
    return newDate;
  }

  render() {
    const { sale } = this.props;
    const newDate = this.dateFormat(sale.saleDate);

    return (
      <div>
        <Link to={ `/customer/orders/${sale.id}` }>
          <p
            data-testid={ `customer_orders__element-order-id-${sale.id}` }
          >
            <span>Pedido:</span>
            { sale.id }
          </p>
          <p
            data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </p>
          <div>
            <p
              data-testid={ `customer_orders__element-order-date-${sale.id}` }
            >
              { newDate }
            </p>
            <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
              { sale.totalPrice.replace(/\./, ',') }
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

OrderCard.propTypes = ({
  sale: PropTypes.objectOf(PropTypes.string),
}).isRequired;

export default OrderCard;
