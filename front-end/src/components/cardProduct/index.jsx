import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import formatPrice from '../../services/formatPrice';
import * as S from './styled';

const CardProduct = ({ image, name, price, id }) => {
  const { cart, setCart } = useContext(Context);
  const [valeuInput, setValeuInput] = useState(0);
  const { totalValue, products } = cart;
  const [quantity, setQuantity] = useState(0);

  const updateCart = ({ target }) => {
    if (target.name === 'increase') {
      const notExist = -1;
      const exists = products.findIndex((item) => item.id === id);

      setQuantity(parseFloat(quantity) + parseFloat(1));

      const newCart = { totalValue: totalValue + price, products };

      if (exists === notExist) {
        newCart.products = [...products, { image, name, price, id, quantity: 1 }];
      }

      if (exists > notExist) newCart.products[exists].quantity += 1;

      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    }

    if (target.name === 'decrease') {
      if (quantity === 0) return;
      const indexItem = products.findIndex((item) => item.id === id);
      const itemToUpdate = products[indexItem];

      const newCart = { totalValue: totalValue - price, products };

      if (quantity === 1) newCart.products.splice(itemToUpdate, 1);
      if (quantity > 1) newCart.products[indexItem].quantity -= 1;

      localStorage.setItem('cart', JSON.stringify(newCart));
      setQuantity(quantity - 1);
      setCart(newCart);
    }
  };

  useEffect(() => {
    setValeuInput(quantity * price);
  }, [quantity, valeuInput]);

  const initPage = () => {
    const local = JSON.parse(localStorage.getItem('user'));
    if (local.length > 0) setCart(local);
  };

  useEffect(() => {
    initPage();
  }, []);

  const updateQuantity = ({ target }) => {
    if (typeof target.value !== 'string') return;
    const newValue = Number(target.value);

    const exists = products.findIndex((item) => item.id === id);
    const notExist = -1;

    const newCart = { totalValue: 0, products };

    if (exists === notExist && quantity > 0) {
      newCart.products = [
        ...products,
        { image, name, price, id, quantity: newValue },
      ];
    }

    if (exists > notExist) newCart.products[exists].quantity = newValue;

    newCart.products.forEach((elem) => {
      newCart.totalValue += (elem.price * elem.quantity);
    });

    localStorage.setItem('cart', JSON.stringify(newCart));
    setQuantity(newValue);
    setCart(newCart);
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
        width="20px"
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
          name="input"
          value={ quantity || 0 }
          onChange={ updateQuantity }
          onKeyUp={ updateQuantity }
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
