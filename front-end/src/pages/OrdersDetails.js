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

  render() {
    const { allInfo } = this.state;
    const customerString = 'customer_order_details';

    if (allInfo.length === 0) {
      return <p>Loading...</p>;
    }

    const { id, seller, saleDate, status, products, totalPrice } = allInfo;

    const newDate = this.dateFormat(saleDate);
    return (
      <div>
        <h3>Detalhe do Pedido</h3>
        <div>
          <div>
            <p data-testid={ `${customerString}__element-order-details-label-order-id` }>
              <span>PEDIDO:</span>
              { id }
            </p>
            <p
              data-testid={ `${customerString}__element-order-details-label-seller-name` }
            >
              <span>P.Vend:</span>
              {seller.name}
            </p>
            <p
              data-testid={ `${customerString}__element-order-details-label-order-date` }
            >
              { newDate }
            </p>
            <p
              data-testid={
                `${customerString}__element-order-details-label-delivery-status`
              }
            >
              { status }
            </p>
          </div>
          <button
            type="button"
            disabled="true"
            data-testid={ `${customerString}__button-delivery-check` }
          >
            MARCAR COMO ENTREGUE
          </button>
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
              />
            )) }
          </tbody>
        </table>
        <p
          data-testid={ `${customerString}__element-order-total-price` }
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
