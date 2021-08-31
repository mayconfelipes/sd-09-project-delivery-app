import { React } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartButton = ({ totalPrice }) => {
  const history = useHistory();
  console.log('TOTAL PRICE', totalPrice);
  const brazilianPrice = (price) => {
    const minN = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };

  return (
    <div>

      <button
        type="button"
        // data-testid="customer_products__checkout-bottom-value"
        data-testid="customer_products__button-cart"
        disabled={ parseInt(totalPrice, 10) === 0 }
        onClick={ () => history.push('/customer/checkout') }
      >
        Ver carrinho: R$
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {`${brazilianPrice(totalPrice)}`}
        </p>
      </button>
    </div>
  );
};

CartButton.propTypes = {
  totalPrice: PropTypes.number,
}.isrequired;

export default CartButton;
