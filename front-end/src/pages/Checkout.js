import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ItensDetails from '../components/ItensDetails';
// import fetchPOST from '../services/fetchPOST';
import {
  allSellerThunk,
  placeOrderThunk, productsAction, setTotalPriceAction } from '../actions/checkoutAction';
import '../styles/Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      deliveryAddress: '',
      deliveryNumber: '',
      selectValue: '',
      redirect: false,
    };

    this.placeOrder = this.placeOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tableItens = this.tableItens.bind(this);
    this.selectSeller = this.selectSeller.bind(this);
  }

  componentDidMount() {
    const { setAllSeller } = this.props;
    setAllSeller();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async placeOrder() {
    const user = localStorage.getItem('user');
    const { selectValue, deliveryAddress, deliveryNumber } = this.state;
    const {
      getTotalPrice,
      getProducts, setProducts, setTotalPrice, setPlaceOrder } = this.props;

    const bodySales = {
      userId: JSON.parse(user).id,
      sellerId: Number(selectValue),
      totalPrice: Number(getTotalPrice.replace(/,/, '.')),
      deliveryAddress,
      deliveryNumber,
      products: getProducts,
    };

    await setPlaceOrder(bodySales);
    // const { id } = await fetchPOST('sales', bodySales);

    this.setState({
      redirect: true,
    });
    setProducts([]);
    setTotalPrice('0,00');
  }

  tableItens() {
    const { getProducts } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th className="item">Item</th>
            <th className="descricao">Descricao</th>
            <th className="quantidade">Quantidade</th>
            <th className="valor-unitario">Valor Unitario</th>
            <th className="sub-total">Sub-total</th>
            <th className="remove">Remover Item</th>
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
    );
  }

  selectSeller() {
    const { getAllSeller } = this.props;
    return (
      <label className="label-seller" htmlFor="seller">
        <p className="word-label">P.Vendedora Responsavel:</p>
        <select
          data-testid="customer_checkout__select-seller"
          name="selectValue"
          onChange={ this.handleChange }
        >
          <option value="">Selecione um Vendedor</option>
          { getAllSeller.map((seller, index) => (
            <option
              key={ `${seller}${index}` }
              value={ seller.id }
            >
              { seller.name }
            </option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    const { getTotalPrice, getOrderID } = this.props;
    const { deliveryAddress, deliveryNumber, redirect } = this.state;

    return (
      <div className="checkout">
        <h3>Finalizar Pedido</h3>
        <div className="checkout-items">
          { this.tableItens() }
          <div className="total-price">
            <span>Total: R$ </span>
            <span
              data-testid="customer_checkout__element-order-total-price"
            >
              { getTotalPrice }
            </span>
          </div>
        </div>
        <h3>Detalhes e Endereco para Entrega</h3>
        <div className="checkout-info">
          <div className="checkout-info-up">
            { this.selectSeller() }
            <label className="label-address" htmlFor="address">
              <p className="word-label">Endereco:</p>
              <input
                type="text"
                placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
                id="address"
                name="deliveryAddress"
                value={ deliveryAddress }
                onChange={ this.handleChange }
                data-testid="customer_checkout__input-address"
              />
            </label>
            <label className="label-number" htmlFor="number">
              <p className="word-label">Numero:</p>
              <input
                type="text"
                placeholder="123"
                id="number"
                name="deliveryNumber"
                value={ deliveryNumber }
                onChange={ this.handleChange }
                data-testid="customer_checkout__input-addressNumber"
              />
            </label>
          </div>
          <div className="checkout-info-down">
            <button
              data-testid="customer_checkout__button-submit-order"
              type="submit"
              onClick={ this.placeOrder }
            >
              FINALIZAR PEDIDO
            </button>
          </div>
        </div>
        { redirect && <Redirect to={ `/customer/orders/${getOrderID}` } /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getProducts: state.checkoutReducer.productsBuy,
  getTotalPrice: state.checkoutReducer.totalPrice,
  getAllSeller: state.checkoutReducer.allSeller,
  getOrderID: state.checkoutReducer.orderID,
  getRedirect: state.checkoutReducer.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (productsBuy) => dispatch(productsAction(productsBuy)),
  setTotalPrice: (totalPrice) => dispatch(setTotalPriceAction(totalPrice)),
  setAllSeller: () => dispatch(allSellerThunk()),
  setPlaceOrder: (body) => dispatch(placeOrderThunk(body)),
});

Checkout.propTypes = ({
  getProducts: PropTypes.arrayOf(PropTypes.object),
  setProducts: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
