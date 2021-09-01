import React, { useContext, useState } from 'react';
import { string, number, shape } from 'prop-types';
import AppContext from '../hooks/context';

function ProductCard({ product }) {
  const { name, price, index, urlImage, id } = product;
  const INITIAL_STATE = {
    name,
    price,
    quantity: 0,
  };
  const [stateProduct, setStateProduct] = useState(INITIAL_STATE);
  const { productsCart, setProductsCart } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setStateProduct((oldState) => ({ ...oldState, quantity: parseInt(value, 10) }));
    setProductsCart({ ...productsCart,
      [name]: { ...productsCart[name], quantity: parseInt(value, 10) } });
  };

  const addProduct = () => {
    // const currentQty = stateProduct.quantity;
    setStateProduct((oldState) => ({ ...oldState, quantity: oldState.quantity + 1 }));
    setProductsCart((oldState) => ({
      ...oldState,
      [name]: { ...oldState[name], quantity: oldState[name].quantity + 1 } }));
  };

  const decreasesProduct = () => {
    const currentQty = stateProduct.quantity;
    if (currentQty >= 1) {
      setStateProduct((oldState) => ({ ...oldState, quantity: oldState.quantity - 1 }));
      setProductsCart((oldState) => ({
        ...oldState,
        [name]: { ...oldState[name], quantity: oldState[name].quantity - 1 } }));
    }
  };

  return (
    <li
      key={ index }
      className="main--products"
    >
      <h4
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h4>
      <img
        className="main--img"
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h1
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.replace(/\./ig, ',')}
      </h1>
      <div className="main--add-item-btn">
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ () => decreasesProduct() }
        >
          -
        </button>
        <input
          type="number"
          name={ name }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ parseInt(stateProduct.quantity, 10).toString() }
          onChange={ handleChange }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ addProduct }
        >
          +
        </button>
      </div>
    </li>
  );
}

ProductCard.propTypes = {
  product: shape({
    name: string.isRequired,
    urlImage: string.isRequired,
    price: string.isRequired,
    id: number.isRequired,
    index: number.isRequired,
  }).isRequired,
};

export default ProductCard;
