import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
// import fetchGET from '../services/fetchGET';
import '../styles/Cards.css';
import { productsThunk } from '../actions/productsAction';

class Products extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     products: [],
  //   };

  //   this.fetchAPI = this.fetchAPI.bind(this);
  // }

  componentDidMount() {
    const { setAllProducts } = this.props;
    setAllProducts();
    // this.fetchAPI();
  }

  // async fetchAPI() {
  //   const result = await fetchGET('products');
  //   this.setState({
  //     products: result,
  //   });
  // }

  render() {
    const { getTotalPrice, getProducts, getAllProducts } = this.props;

    return (
      <div>
        <Link to="/customer/checkout">
          <button
            className="buttonCarrinho"
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
        <div className="allCard">
          { getAllProducts.map((product, index) => (
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
  getAllProducts: state.productsReducer.allProduct,
});

const mapDispatchToProps = (dispatch) => ({
  setAllProducts: () => dispatch(productsThunk()),
});

Products.propTypes = ({
  getProducts: PropTypes.arrayOf(PropTypes.object),
  setProducts: PropTypes.func,
  getTotalPrice: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Products);
