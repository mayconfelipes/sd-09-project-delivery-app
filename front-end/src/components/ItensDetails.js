import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsAction, setTotalPriceAction } from '../actions/checkoutAction';
import '../styles/Checkout.css';
import '../styles/OrderDetails.css';

class ItensDetails extends React.Component {
  constructor() {
    super();

    this.removeProduct = this.removeProduct.bind(this);
  }

  calTotalPrice(newProducts) {
    const { setTotalPrice } = this.props;
    let totalPrice = 0;
    newProducts.forEach(({ price, quantity }) => {
      totalPrice += (Number(price) * quantity);
    });

    setTotalPrice(totalPrice.toFixed(2).replace(/\./, ','));
  }

  removeProduct() {
    const { product, getProducts, setProducts } = this.props;

    const productsFilter = getProducts
      .filter((productFind) => productFind.id !== product.id);
    this.calTotalPrice(productsFilter);
    setProducts(productsFilter);
  }

  render() {
    const { product: { name, price, quantity }, indexP } = this.props;

    return (
      <tr>
        <td
          className="detail-item"
          data-testid={ `customer_checkout__element-order-table-item-number-${indexP}` }
        >
          { indexP + 1 }
        </td>
        <td
          className="detail-name"
          data-testid={ `customer_checkout__element-order-table-name-${indexP}` }
        >
          { name }
        </td>
        <td
          className="detail-quantity"
          data-testid={ `customer_checkout__element-order-table-quantity-${indexP}` }
        >
          { quantity }
        </td>
        <td
          className="detail-valor"
          data-testid={ `customer_checkout__element-order-table-unit-price-${indexP}` }
        >
          { price.replace(/\./, ',') }
        </td>
        <td
          className="detail-sub-total"
          data-testid={ `customer_checkout__element-order-table-sub-total-${indexP}` }
        >
          { (price * quantity).toFixed(2).replace(/\./, ',') }
        </td>
        <td
          className="detail-remove"
          data-testid={ `customer_checkout__element-order-table-remove-${indexP}` }
        >
          <button type="button" onClick={ this.removeProduct }>Remover</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  getProducts: state.checkoutReducer.productsBuy,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (productsBuy) => dispatch(productsAction(productsBuy)),
  setTotalPrice: (totalPrice) => dispatch(setTotalPriceAction(totalPrice)),
});

ItensDetails.propTypes = ({
  product: PropTypes.objectOf,
  setProducts: PropTypes.func,
  setTotalPrice: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ItensDetails);
