import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const quantityInput = useRef(null);

  const {
    setCurrentOrder,
    currentOrder,
    setCurrentOrderTotal,
  } = useContext(ProductsContext);

  useEffect(() => {
    const itemInCurrentOrder = currentOrder
      .find((item) => item.id === product.id);
    if (itemInCurrentOrder) {
      quantityInput.current.value = itemInCurrentOrder.quantity;
      setQuantity(itemInCurrentOrder.quantity);
    }
  }, []);

  const updateCurrentOrder = (diff) => {
    let order = currentOrder;
    const index = order.findIndex((item) => item.id === product.id);
    if (index < 0) {
      order.push({
        id: product.id,
        quantity: 1,
        price: product.price,
        name: product.name,
      });
    } else {
      order[index].quantity = Number(quantity) + diff;
    }
    order = order.filter((item) => item.quantity > 0);
    const orderTotalValue = order
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
    setCurrentOrder(order);
    setCurrentOrderTotal(orderTotalValue);
  };

  const updateCurrentOrderByInput = ({ target: { value } }) => {
    setQuantity(Number(value));
    let order = currentOrder;
    const index = order.findIndex((item) => item.id === product.id);
    if (index < 0) {
      order.push({
        id: product.id,
        quantity: value,
        price: product.price,
        name: product.name,
      });
    } else {
      order[index].quantity = Number(value);
    }
    order = order.filter((item) => item.quantity > 0);
    const orderTotalValue = order
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
    setCurrentOrder(order);
    setCurrentOrderTotal(orderTotalValue);
  };

  const increaseQuantity = () => {
    const INCREASE = 1;
    quantityInput.current.value = Number(quantityInput.current.value) + INCREASE;
    setQuantity(quantity + 1);
    updateCurrentOrder(INCREASE);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    const DECREASE = -1;
    quantityInput.current.value = Number(quantityInput.current.value) + DECREASE;
    setQuantity(quantity - 1);
    updateCurrentOrder(DECREASE);
  };

  return (
    <div className="product_card">
      <div
        className="card_price"
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price.replace('.', ',') }
      </div>

      <img
        src={ product.urlImage }
        alt={ `Imagem de ${product.name}` }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        className="image"
      />

      <div className="product_card__footer">
        <p
          className="product_name"
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>

        <div className="quantity">
          <button
            className={ `decremento-${product.id}` }
            type="button"
            data-testid={
              `customer_products__button-card-rm-item-${product.id}`
            }
            onClick={ decreaseQuantity }
          >
            -
          </button>
          <input
            type="number"
            min="0"
            ref={ quantityInput }
            value={ quantityInput.current ? quantityInput.current.value : '0' }
            data-testid={
              `customer_products__input-card-quantity-${product.id}`
            }
            onChange={ (e) => updateCurrentOrderByInput(e) }
          />
          <button
            className={ `incremento-${product.id}` }
            type="button"
            data-testid={
              `customer_products__button-card-add-item-${product.id}`
            }
            onClick={ increaseQuantity }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
