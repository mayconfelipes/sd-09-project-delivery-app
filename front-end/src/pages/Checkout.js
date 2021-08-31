import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderCustomer from '../components/HeaderCustomer';
import ItensDetails from '../components/ItensDetails';

class Checkout extends React.Component {
  render() {
    const { getProducts, getTotalPrice } = this.props;

    return (
      <div>
        <HeaderCustomer />
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
          { getProducts.map((product, index) => (
            <ItensDetails
              key={ `${product}${index}` }
              product={ product }
              indexP={ index }
            />
          )) }
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
            >
              <option value="test">Teste 01</option>
            </select>
          </label>
          <label htmlFor="address">
            Endereco
            <input
              type="text"
              id="address"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Numero
            <input
              type="text"
              id="number"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
          >
            FINALIZAR PEDIDO
          </button>
        </div>
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
