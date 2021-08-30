import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };

    this.changeValue = this.changeValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (value < 0) return this.setState({ [name]: 0 });
    this.setState({ [name]: value });
  }

  changeValue(type) {
    const { value } = this.state;

    if (type === 'add') {
      this.setState((prevState) => ({ value: (Number(prevState.value) + 1) }));
    } else if (type === 'sub') {
      if (value === 0) return;
      this.setState((prevState) => ({ value: (Number(prevState.value) - 1) }));
    }
  }

  render() {
    const { product } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div>
          <p
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { product.price.replace(/\./, ',')}
          </p>
          <img
            src={ product.url_image }
            alt={ product.name }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            width="150px"
            height="150px"
          />
        </div>
        <div>
          <p
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </p>
          <button
            type="button"
            onClick={ () => this.changeValue('sub') }
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
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

ProductCard.propTypes = ({
  product: PropTypes.objectOf.isRequired,
});

export default ProductCard;
