import React, { useState } from 'react';

const CardProduct = (image, name) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <img src={ image } alt={`bebida: ${ image }`} />
      <span>{ name }</span>
      <button
        type="button"
        onClick = { () => {
          if (quantity = 0) return null;
          setQuantity(quantity - 1);
        } }
      >
        -
      </button>
      <span>{ quantity }</span>
      <button
        type="button"
        onClick= { () => {
          setQuantity(quantity + 1);
        } }
      >
        +
      </button>
    </div>
  );
};

export default CardProduct;
