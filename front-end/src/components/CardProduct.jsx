import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardProduct = (props) => {
  const { product: { id, name, price, urlImage } } = props;
  const prefix = 'customer_products__';
  const [quantity, setQuantity] = useState(0);

  const setProducts = (quant) => {
    const totalProduct = quant * price;
    const getProducts = JSON.parse(localStorage.getItem('products'));
    const currentProducts = { ...getProducts, name: totalProduct };
    localStorage
      .setItem('products', JSON.stringify(currentProducts));
  };

  const addItem = () => {
    setQuantity(quantity + 1);
    setProducts(quantity + 1);
  };

  const removeItem = () => {
    if (quantity === 0) {
      setQuantity(0);
      setProducts(0);
    } else {
      setQuantity(quantity - 1);
      setProducts(quantity - 1);
    }
  };
  // const brazilianPrice = () => {
  //   const newPrice = price.toString().replace('.', ',');
  //   return newPrice;
  // };
  return (
    <div>
      <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
      <p data-testid={ `${prefix}element-card-price-${id}` }>{price}</p>
      <img
        width="100px"
        src={ urlImage }
        alt={ name }
        data-testid={ `${prefix}img-card-bg-image-${id}` }
      />
      <input
        type="numer"
        value={ quantity }
        onChange={ (e) => setQuantity(e.target.value) }
        data-testid={ `${prefix}input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ addItem }
        data-testid={ `${prefix}button-card-add-item-${id}` }
      >
        +
      </button>
      <button
        type="button"
        onClick={ removeItem }
        data-testid={ `${prefix}button-card-rm-item-${id}` }
      >
        -
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isrequired;

export default CardProduct;
