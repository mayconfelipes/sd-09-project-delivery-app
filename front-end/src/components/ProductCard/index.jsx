import React, { useState, useEffect } from 'react';
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
  const [quantity, setQuantity] = useState(0);
  const [quantityItem, setQuantityItem] = useState(0);

  const { setCartQuantity, cartQuantity, setItemId } = useGlobalContext();

  useEffect(() => {
    setQuantityItem(quantity);
  }, [cartQuantity, id, quantity, quantityItem]);

  useEffect(() => {
    setItemId(quantity);
    const ifExistsArray = cartQuantity.filter((item) => item.id === id);
    if (ifExistsArray.length > 0) {
      ifExistsArray[0].quantity = quantity;
    } else {
      setCartQuantity([
        ...cartQuantity, { id, quantity, price, description }]);
    }
  }, [cartQuantity, description, id, price, quantity, setCartQuantity, setItemId]);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem('cart'));
    if (localItems && localItems.length) {
      localItems.map((item) => item.id === id && setQuantity(item.quantity));
    }
  }, [id]);

  const onHandleDecrement = () => {
    if (quantity <= 0) return;

    setQuantity(quantity - 1);
  };

  const onHandleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const onInputChange = (({ target }) => {
    setQuantity(target.value);
  });

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
            value={ quantityItem || 0 }
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
