import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import fetchGET from '../services/fetchGET';
import { productsAction } from '../actions/checkoutAction';
import HeaderCustomer from '../components/HeaderCustomer';

class Customer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    try {
      const result = await fetchGET('products');
      this.setState({
        products: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products } = this.state;
    const { getTotalPrice, getProducts } = this.props;

    return (
      <div>
        <HeaderCustomer />
        <Link to="/customer/checkout">
          <button
            type="button"
            disabled={ !getProducts.length > 0 }
            data-testid="customer_products__button-cart"
          >
            Ver Carrinho: RS$
            <span
              data-testid="customer_products__checkout-bottom-value"
            >
              {getTotalPrice}
            </span>
          </button>
        </Link>
        <div>
          { products.map((product, index) => (
            <ProductCard
              key={ `${product}${index}` }
              product={ product }
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getProducts: state.checkoutReducer.productsBuy,
  getTotalPrice: state.checkoutReducer.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (productsBuy) => dispatch(productsAction(productsBuy)),
});

Customer.propTypes = ({
  getProducts: PropTypes.arrayOf(PropTypes.object),
  setProducts: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
