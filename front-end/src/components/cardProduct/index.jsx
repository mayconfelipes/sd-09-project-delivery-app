import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import formatPrice from '../../services/formatPrice';
import * as S from './styled';

const CardProduct = ({ image, name, price, id }) => {
  const { cart, setCart } = useContext(Context);
  const { totalValue, products } = cart;
  const [quantity, setQuantity] = useState(0);

  const updateCart = ({ target }) => {
    if (target.name === 'increase') {
      const exists = products.findIndex((item) => item.id === id);
      const notExist = -1;

      setQuantity(quantity + 1);

      const newCart = { totalValue: totalValue + price, products };

      if (exists === notExist) {
        newCart.products = [...products, { image, name, price, id, quantity: 1 }];
      }

      if (exists > notExist) newCart.products[exists].quantity += 1;

      setCart(newCart);
    }

    if (target.name === 'decrease') {
      if (quantity === 0) return;
      const indexItem = products.findIndex((item) => item.id === id);
      const itemToUpdate = products[indexItem];

      const newCart = { totalValue: totalValue - price, products };

      if (quantity === 1) newCart.products.splice(itemToUpdate, 1);
      if (quantity > 1) newCart.products[indexItem].quantity -= 1;

      setQuantity(quantity - 1);
      setCart(newCart);
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
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ ({ target }) => setQuantity(target.value) }
        />
        <button
          type="button"
          onClick={ updateCart }
          name="increase"
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
