import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import socket from '../utils/socket';
import '../styles/Orders.css';

class OrderCard extends React.Component {
  constructor() {
    super();

    this.state = {
      statusP: '',
      statusColor: 'status-pendente',
    };

    this.dateFormat = this.dateFormat.bind(this);
    this.sellerAddress = this.sellerAddress.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    const { sale: { id } } = this.props;
    const { statusColor } = this.state;
    socket.emit('statusInitial', { id, statusColor });
    this.updateStatus();
  }

  updateStatus() {
    const { sale } = this.props;
    this.setState({
      statusP: sale.status,
    });

    socket.on('statusColorInitial', ({ id, statusColor }) => {
      if (Number(sale.id) === id) {
        this.setState({
          statusColor,
        });
      }
    });

    socket.on('newStatus', ({ id, status, statusColor }) => {
      if (Number(sale.id) === id) {
        this.setState({
          statusP: status,
          statusColor,
        });
      }
    });
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

  sellerAddress() {
    const { sale } = this.props;
    return (
      <div className="word-address">
        <span>Rua: </span>
        <span
          data-testid={ `seller_orders__element-card-address-${sale.id}` }
        >
          {`${sale.deliveryAddress}, ${sale.deliveryNumber}` }
        </span>
      </div>
    );
  }

  dateAndStatus() {
    const { sale, role } = this.props;
    const newDate = this.dateFormat(sale.saleDate);
    return (
      <div>
        <p
          className="word-date-price"
          data-testid={ `${role}_orders__element-order-date-${sale.id}` }
        >
          { newDate }
        </p>
        <div className="word-date-price">
          <span>R$ </span>
          <span
            data-testid={ `${role}_orders__element-card-price-${sale.id}` }
          >
            { sale.totalPrice.replace(/\./, ',') }
          </span>
        </div>
      </div>
    );
  }

  render() {
    const { sale, role } = this.props;
    const { statusP, statusColor } = this.state;

    return (
      <div>
        <Link className="card" to={ `/${role}/orders/${sale.id}` }>
          <div className="word-pedido">
            <p>Pedido:</p>
            <p
              data-testid={ `${role}_orders__element-order-id-${sale.id}` }
            >
              { sale.id }
            </p>
          </div>
          <div className="container-card">
            <div className="card-up">
              <p
                className={ statusColor }
                data-testid={ `${role}_orders__element-delivery-status-${sale.id}` }
              >
                { statusP }
              </p>
              { this.dateAndStatus() }
            </div>
            { role === 'seller' && this.sellerAddress() }
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
