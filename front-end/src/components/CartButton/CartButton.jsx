import { React } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CartButton.css';

const CartButton = ({ totalPrice }) => {
  const history = useHistory();
  const brazilianPrice = (price) => {
    const minN = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };

  return (
    <button
      type="button"
      className="cart-button-total-price"
      data-testid="customer_products__button-cart"
      disabled={ parseInt(totalPrice, 10) === 0 }
      onClick={ () => history.push('/customer/checkout') }
    >
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        {`Ver Carrinho ${brazilianPrice(totalPrice)}`}
      </p>
    </button>
  );
};

CartButton.propTypes = {
  totalPrice: PropTypes.number,
}.isrequired;

export default CartButton;
