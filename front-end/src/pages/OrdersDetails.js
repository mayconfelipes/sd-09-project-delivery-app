import React from 'react';
import PropTypes from 'prop-types';
import fetchGET from '../services/fetchGET';
import ItensDetailsOrder from '../components/ItensDetailsOrder';

class Order extends React.Component {
  constructor() {
    super();

    this.state = {
      allInfo: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match: { params: { id } } } = this.props;
    const result = await fetchGET('sales-products');

    const filterResult = result.find((sale) => sale.id === Number(id));

    this.setState({
      allInfo: filterResult,
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

  buttonCustomer(role) {
    return (
      <button
        type="button"
        disabled="true"
        data-testid={ `${role}_order_details__button-delivery-check` }
      >
        MARCAR COMO ENTREGUE
      </button>
    );
  }

  buttonSeller(role) {
    return (
      <div>
        <button
          type="button"
          data-testid={ `${role}_order_details__button-preparing-check` }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          disabled="true"
          data-testid={ `${role}_order_details__button-dispatch-check` }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    );
  }

  renderSeller(role) {
    const { allInfo: { seller } } = this.state;
    return (
      <p
        data-testid={
          `${role}_order_details__element-order-details-label-seller-name`
        }
      >
        <span>P.Vend:</span>
        {seller.name}
      </p>
    );
  }

  render() {
    const { allInfo } = this.state;
    const { role } = JSON.parse(localStorage.user);

    if (allInfo.length === 0) {
      return <p>Loading...</p>;
    }

    const { id, saleDate, status, products, totalPrice } = allInfo;

    const newDate = this.dateFormat(saleDate);
    return (
      <div>
        <h3>Detalhe do Pedido</h3>
        <div>
          <div>
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-order-id`
              }
            >
              <span>PEDIDO:</span>
              { id }
            </p>
            { role === 'customer' && this.renderSeller(role)}
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-order-date`
              }
            >
              { newDate }
            </p>
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-delivery-status`
              }
            >
              { status }
            </p>
          </div>
          { role === 'customer' && this.buttonCustomer(role) }
          { role === 'seller' && this.buttonSeller(role) }
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descricao</th>
              <th>Quantidade</th>
              <th>Valor Unitario</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>
            { products.map((product, index) => (
              <ItensDetailsOrder
                key={ `${product}${index}` }
                product={ product }
                idP={ index }
                role={ role }
              />
            )) }
          </tbody>
        </table>
        <p
          data-testid={ `${role}_order_details__element-order-total-price` }
        >
          { totalPrice.replace(/\./, ',') }
        </p>
      </div>
    );
  }
}

Order.propTypes = ({
  match: {
    params: {
      id: PropTypes.number,
    },
  },
}).isRequired;

export default Order;
