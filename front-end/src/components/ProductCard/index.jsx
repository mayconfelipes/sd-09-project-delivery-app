import React from 'react';
import P from 'prop-types';
import style from './productCard.module.scss';
import useGlobalContext from '../../context/GlobalStateProvider';

const ProductCard = (
  { id,
    price,
    image,
    description,
  },
) => {
  const {
    onHandleDecrement,
    onHandleIncrement,
    onInputChange,
    quantity } = useGlobalContext();

  /* const onHandleDecrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const onHandleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ [name]: value });
    return null;
  }; */

  return (
    <div className={ style.productCardContainer }>
      <span data-testid={ `customer_products__element-card-price-${id}` }>{price}</span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ description }
      />
      <div className={ style.productCard }>
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>
          {description}
        </h2>
        <div className={ style.quantityContainer }>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            className={ style.decrement }
            onClick={ onHandleDecrement }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            value={ quantity }
            name={ id }
            onChange={ onInputChange }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            className={ style.increment }
            onClick={ onHandleIncrement }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  price: P.string.isRequired,
  image: P.string.isRequired,
  description: P.string.isRequired,
  id: P.number.isRequired,
};
