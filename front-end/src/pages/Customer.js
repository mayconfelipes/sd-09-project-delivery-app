import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import fetchGET from '../services/fetchGET';
import { productsAction } from '../actions/checkoutAction';

class Customer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      name: '',
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.userName = this.userName.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
    this.userName();
  }

  userName() {
    const user = localStorage.getItem('user');
    this.setState({
      name: JSON.parse(user).name,
    });
  }

  async fetchAPI() {
    try {
      const result = await fetchGET('http://localhost:3001/products');
      this.setState({
        products: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  render() {
    const { products, name } = this.state;
    const { getTotalPrice, getProducts } = this.props;

    return (
      <div>
        <nav>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
          <p
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </p>
          <Link to="/login">
            <button
              type="button"
              onClick={ this.removeUser }
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Link>
        </nav>
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
