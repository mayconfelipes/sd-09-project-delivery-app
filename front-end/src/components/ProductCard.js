import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div>
          <p>{ product.name }</p>
        </div>
        <div>
          <p>Teste</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = ({
  product: PropTypes.objectOf.isRequired,
});

export default ProductCard;
