import React, { useState } from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../../utils/creators';

const route = 'customer_products';

function ProductCard({ id }) {
  const [state, setState] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <section>
      <h1>CARD DO PRODUTO</h1>
      <p data-testid={ `${route}__element-card-title-${id}` }>title</p>
      <p data-testid={ `${route}__element-card-price-${id}}` }>price</p>
      <img data-testid={ `${route}__img-card-bg-image-${id}` } alt="product" />
      { createButton(`add-item-${id}`, () => {}, `${route}-card`) }
      { createButton(`rm-item-${id}`, () => {}, `${route}-card`) }
      { createInput(`quantity-${id}`, 'text', handleChange, `${route}-card`) }
    </section>
  );
}

ProductCard.propTypes = {
  id: number,
}.isRequired;

export default ProductCard;
