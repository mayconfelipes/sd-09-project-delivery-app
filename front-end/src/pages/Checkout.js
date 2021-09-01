import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ItensDetails from '../components/ItensDetails';
import fetchGET from '../services/fetchGET';
import fetchPOST from '../services/fetchPOST';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      deliveryAddress: '',
      deliveryNumber: '',
      sellers: [],
      selectValue: '',
      redirect: false,
      id: 0,
    };

    this.placeOrder = this.placeOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchAPI() {
    try {
      const result = await fetchGET('users');
      const arrayFilter = result.filter((user) => user.role === 'seller');
      this.setState({
        sellers: arrayFilter,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async placeOrder() {
    const user = localStorage.getItem('user');
    const { selectValue, deliveryAddress, deliveryNumber } = this.state;
    const { getTotalPrice, getProducts } = this.props;
    const bodySales = {
      userId: JSON.parse(user).id,
      sellerId: Number(selectValue),
      totalPrice: Number(getTotalPrice.replace(/,/, '.')),
      deliveryAddress,
      deliveryNumber,
      products: getProducts,
    };

    const { id } = await fetchPOST('sales', bodySales);

    this.setState({
      id,
      redirect: true,
    });
  }

  render() {
    const { getProducts, getTotalPrice } = this.props;
    const { deliveryAddress, deliveryNumber, sellers, redirect, id } = this.state;

    return (
      <div>
        <p>Finalizar Pedido</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descricao</th>
              <th>Quantidade</th>
              <th>Valor Unitario</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            { getProducts.map((product, index) => (
              <ItensDetails
                key={ `${product}${index}` }
                product={ product }
                indexP={ index }
              />
            )) }
          </tbody>
        </table>
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          { getTotalPrice }
        </p>
        <p>Detalhes e Endereco para Entrega</p>
        <div>
          <label htmlFor="seller">
            P.Vendedora Responsavel:
            <select
              data-testid="customer_checkout__select-seller"
              name="selectValue"
              onChange={ this.handleChange }
            >
              <option value="">Selecione um Vendedor</option>
              { sellers.map((seller, index) => (
                <option
                  key={ `${seller}${index}` }
                  value={ seller.id }
                >
                  { seller.name }
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="address">
            Endereco
            <input
              type="text"
              id="address"
              name="deliveryAddress"
              value={ deliveryAddress }
              onChange={ this.handleChange }
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Numero
            <input
              type="text"
              id="number"
              name="deliveryNumber"
              value={ deliveryNumber }
              onChange={ this.handleChange }
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
            onClick={ this.placeOrder }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
        { redirect && <Redirect to={ `/customer/orders/${id}` } /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getProducts: state.checkoutReducer.productsBuy,
  getTotalPrice: state.checkoutReducer.totalPrice,
});

Checkout.propTypes = ({
  getProducts: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default connect(mapStateToProps)(Checkout);
