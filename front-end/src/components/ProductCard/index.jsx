import React from 'react';
import P from 'prop-types';
import style from './productCard.module.scss';

const ProductCard = ({ price, image, description }) => (
  <div className={ style.productCardContainer }>
    <span>{`R$ ${price}`}</span>
    <img src={ image } alt={ description } />
    <div className={ style.productCard }>
      <h2>{description}</h2>
      <div className={ style.quantityContainer }>
        <button type="button" className={ style.decrement }>-</button>
        <input type="text" value="0" />
        <button type="button" className={ style.increment }>+</button>
      </div>
    </div>
  </div>
);

export default ProductCard;

ProductCard.propTypes = {
  price: P.number.isRequired,
  image: P.string.isRequired,
  description: P.string.isRequired,
};
