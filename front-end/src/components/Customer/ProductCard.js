import React, { useState } from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../../utils/creators';
import { addItemBtn, rmItemBtn } from '../../data/ButtonOptions';
import { itemQty } from '../../data/InputOptions';

const route = 'customer_products';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const [state, setState] = useState({});
  const [quantity, setQuantity] = useState(0);

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const onClick = ({ target }) => {
    if (target.name.includes('add')) setQuantity(() => (quantity + 1));
    if (target.name.includes('rm') && quantity > 0) setQuantity(() => (quantity - 1));
  };

  return (
    <section>
      {/* <h1>CARD DO PRODUTO</h1> */}
      <h1 data-testid={ `${route}__element-card-title-${id}` }>
        { name }
      </h1>
      <p data-testid={ `${route}__element-card-price-${id}` }>
        { price.replace(/\./, ',') }
      </p>
      <img
        data-testid={ `${route}__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      { createButton({ ...addItemBtn(id), onClick, route: `${route}` }) }
      { createButton({ ...rmItemBtn(id), onClick, route: `${route}` }) }
      { createInput({ ...itemQty(id), onChange: () => {}, route: `${route}` }) }
      <input
        data-testid={ `${route}__input-card-quantity-${id}` }
        name={ `card-quantity-${id}` }
        onChange={ handleChange }
        value={ quantity }
      />
    </section>
  );
}

ProductCard.propTypes = {
  id: number,
}.isRequired;

export default ProductCard;
