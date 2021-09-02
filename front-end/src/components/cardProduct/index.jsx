import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../context';
import formatPrice from '../../services/formatPrice';
import * as S from './styled';

const CardProduct = ({ image, name, price, id }) => {
  const { cart, setCart } = useContext(context);
  const { totalValue, products } = cart;
  const [quantity, setQuantity] = useState(0);

  const updateCart = ({ target }) => {
    if (target.name === 'increase') {
      setQuantity(quantity + 1);
      setCart({
        totalValue: totalValue + price,
        products: [...products, { image, name, price, id }],
      });
      return;
    }

    if (target.name === 'decrease' && quantity > 0) {
      setQuantity(quantity - 1);
      const itemToRemove = products.findIndex((product) => product.id === id);
      const newList = products.splice(itemToRemove, 1);
      setCart({
        totalValue: totalValue - price,
        products: [...newList],
      });
    }
  };

  return (
    <S.Card>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        { formatPrice(price) }
      </span>
      <img
        src={ image }
        alt={ `bebida: ${image}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>{ name }</span>
      <S.ButtonsDiv>

        <button
          type="button"
          name="decrease"
          onClick={ updateCart }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <span data-testid={ `customer_products__input-card-quantity-${id}` }>
          { quantity }
        </span>
        <button
          type="button"
          onClick={ updateCart }
          name="increase"
          data-testid={ `customer_products__button-card-add-item-${id} ` }
        >
          +
        </button>
      </S.ButtonsDiv>
    </S.Card>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;
