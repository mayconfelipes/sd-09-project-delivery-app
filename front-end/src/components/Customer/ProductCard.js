import React, { useState, useContext, useEffect } from 'react';
import { number } from 'prop-types';
import { createButton } from '../../utils/creators';
import { addItemBtn, rmItemBtn } from '../../data/ButtonOptions';
import { CustomerContext } from '../../context/CustomerContext';
import { formatPrice } from '../../utils/format';

const route = 'customer_products';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const [quantity, setQuantity] = useState(0);
  const { updateCart } = useContext(CustomerContext);

  useEffect(() => {
    if (quantity >= 0) {
      updateCart(id, name, price, quantity);
    }
  }, [id, name, quantity, price]);

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
        { formatPrice(price) }
      </p>
      <img
        data-testid={ `${route}__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      { createButton({ ...addItemBtn(id), onClick, route: `${route}` }) }
      { createButton({ ...rmItemBtn(id), onClick, route: `${route}` }) }
      <input
        data-testid={ `${route}__input-card-quantity-${id}` }
        name={ `card-quantity-${id}` }
        type="number"
        min="0"
        onChange={ (({ target: { value } }) => setQuantity(value)) }
        value={ quantity }
      />
    </section>
  );
}

ProductCard.propTypes = {
  id: number,
}.isRequired;

export default ProductCard;
