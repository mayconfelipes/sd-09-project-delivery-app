import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImg } from '../../services/api';

function ProductCard({ product }) {
  const [counter, setCounter] = useState(0);
  const [prodImg, setProdImg] = useState('');
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const productImg = async () => {
      const img = await getImg(userInfo.token, product.url_image);
      console.log(img);
      setProdImg(img);
    };
    productImg();
  }, [product.url_image]);

  return (
    <div>
      <div>
        <img
          src={ prodImg }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </div>
      <div data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price}
      </div>
      <button
        type="button"
        onClick={ decrement }
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <div
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      >
        {counter}
      </div>
      <button
        type="button"
        onClick={ increment }
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
