import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Customer from '../context/customerContext';

const ProductCard = (props) => {
  const { product } = props;
  const { shoppingCart, setShoppingCart } = useContext(Customer);
  const [negativeNumError, setNegativeNumError] = useState(false);
  const negativeNumErrorMsg = 'Quantity must be greater than zero';

  useEffect(() => {
    const quantityInput = document.getElementById(`quantity-${product.id}`);
    if (quantityInput) {
      quantityInput.value = 0;
    }
  }, [product.id]);

  const priceWithComma = `${(Math.round(product.price * 100) / 100).toFixed(2)}`
    .split('.').join(',');

  function handleRemoveProduct(e) {
    e.preventDefault();
    const { id, name, price, urlImage } = product;
    const quantityInput = document.getElementById(`quantity-${id}`);
    const currentQuantity = Number(quantityInput.value) || 0;
    if (currentQuantity >= 1) {
      quantityInput.value = currentQuantity - 1;
      const prod = {
        id,
        name,
        price,
        urlImage,
        quantity: currentQuantity - 1,
      };
      const cart = shoppingCart.filter((item) => item.id !== id);
      cart.push(prod);
      setShoppingCart(cart);
    }
  }

  function handleAddProduct(e) {
    e.preventDefault();
    const { id, name, price, urlImage } = product;
    const quantityInput = document.getElementById(`quantity-${id}`);
    const currentQuantity = Number(quantityInput.value) || 0;
    quantityInput.value = currentQuantity + 1;
    const prod = {
      id,
      name,
      price,
      urlImage,
      quantity: currentQuantity + 1,
    };
    const cart = shoppingCart.filter((item) => item.id !== id);
    cart.push(prod);
    setShoppingCart(cart);
  }

  function handleChangeQuantity(e) {
    const { id, name, price, urlImage } = product;
    const currentQuantity = e.target.value;
    if (currentQuantity < 0) {
      setNegativeNumError(true);
      return false;
    }
    const prod = {
      id,
      name,
      price,
      urlImage,
      quantity: currentQuantity,
    };
    const cart = shoppingCart.filter((item) => item.id !== id);
    cart.push(prod);
    setShoppingCart(cart);
  }

  return (
    <div className="productCard">
      <p
        className="price"
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { priceWithComma }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt={ product.name }
        height="150px"
      />
      <div className="productHeader">
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </p>
        <div className="quantityBtn">
          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ handleRemoveProduct }
          >
            -
          </button>
          <input
            className="quantityInput"
            id={ `quantity-${product.id}` }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            type="number"
            min="0"
            onChange={ handleChangeQuantity }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ handleAddProduct }
          >
            +
          </button>
        </div>
        <p className="quantityError">
          { negativeNumError && negativeNumErrorMsg }
        </p>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  product: undefined,
};

ProductCard.propTypes = {
  product: PropTypes.shape(PropTypes.string),
};

export default ProductCard;
