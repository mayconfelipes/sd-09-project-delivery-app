import React from 'react';
import PropTypes from 'prop-types';

class ItensDetails extends React.Component {
  render() {
    const {
      product: { name, price, salesProducts: { quantity } },
      idP,
      role } = this.props;

    return (
      <tr>
        <td
          data-testid={ `${role}_order_details__element-order-table-item-number-${idP}` }
        >
          { idP + 1 }
        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-name-${idP}` }
        >
          { name }
        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-quantity-${idP}` }
        >
          { quantity }
        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-price-${idP}` }
        >
          { price.replace(/\./, ',') }
        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-sub-total-${idP}` }
        >
          { (price * quantity).toFixed(2).replace(/\./, ',') }
        </td>
      </tr>
    );
  }
}

ItensDetails.propTypes = ({
  product: PropTypes.objectOf,

}).isRequired;

export default ItensDetails;
