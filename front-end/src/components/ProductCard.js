import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsAction, setTotalPriceAction } from '../actions/checkoutAction';
import '../styles/Cards.css';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };

    this.changeValue = this.changeValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.controlProducts = this.controlProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.calTotalPrice = this.calTotalPrice.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  componentDidMount() {
    this.updateValue();
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (value < 0) return this.setState({ [name]: 0 });
    this.setState({ [name]: value }, () => {
      this.removeProduct();
    });
  }

  updateValue() {
    const { product, getProducts } = this.props;

    getProducts.forEach((productFor) => {
      if (productFor.id === product.id) {
        this.setState({
          value: productFor.quantity,
        });
      }
    });
  }

  calTotalPrice(newProducts) {
    const { setTotalPrice } = this.props;
    let totalPrice = 0;
    newProducts.forEach(({ price, quantity }) => {
      totalPrice += (Number(price) * quantity);
    });

    setTotalPrice(totalPrice.toFixed(2).replace(/\./, ','));
  }

  controlProducts() {
    const { product, getProducts, setProducts } = this.props;
    const { value } = this.state;
    let newProducts = getProducts;

    const boolProduct = getProducts.find((productFind) => productFind.id === product.id);

    if (boolProduct) {
      newProducts = getProducts.map((prod) => {
        if (prod.id === product.id) {
          return { ...prod, quantity: value };
        }
        return prod;
      });
    } else {
      newProducts.push({ ...product, quantity: value });
    }
    this.calTotalPrice(newProducts);
    setProducts(newProducts);
  }

  removeProduct() {
    const { product, getProducts, setProducts } = this.props;
    const { value } = this.state;
    if (value === 0) {
      const productsFilter = getProducts
        .filter((productFind) => productFind.id !== product.id);
      this.calTotalPrice(productsFilter);
      return setProducts(productsFilter);
    }
    this.controlProducts();
  }

  changeValue(type) {
    const { value } = this.state;

    if (type === 'add') {
      this.setState((prevState) => ({ value: (Number(prevState.value) + 1) }),
        () => {
          this.controlProducts();
        });
    } else if (type === 'sub') {
      if (value === 0) return;
      this.setState((prevState) => ({ value: (Number(prevState.value) - 1) }),
        () => {
          this.removeProduct();
        });
    }
  }

  render() {
    const { product } = this.props;
    const { value } = this.state;

    return (
      <div className="cards">
        <div>
          <p
            className="p1cards"
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { product.price.replace(/\./, ',')}
          </p>
          <img
            className="imgCard"
            src={ product.urlImage }
            alt={ product.name }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            width="150px"
            height="150px"
          />
        </div>
        <div className="botCard">
          <p
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </p>
          <button
            className="buttons"
            type="button"
            onClick={ () => this.changeValue('sub') }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            className="inputcards"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            className="buttons"
            type="button"
            onClick={ () => this.changeValue('add') }
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
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

ProductCard.propTypes = ({
  product: PropTypes.objectOf,
  setProducts: PropTypes.func,
  setTotalPrice: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
