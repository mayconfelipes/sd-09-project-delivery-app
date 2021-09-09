import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { useDeliveryContext } from '../../context/deliveryProvider';
import './ItemCards.css';

const ItemCard = ({ list }) => {
  const { cart, setCart } = useDeliveryContext();
  const [isDataValid, setIsDataValid] = useState(true);
  const history = useHistory();
  // const [cart, setCart] = useState({});
  console.log(cart);
  const incrementQuantity = (id, name, price) => {
    if (!cart[id]) {
      return setCart({ ...cart, [id]: { id, name, price, quantity: 1 } });
    }

    setCart({ ...cart, [id]: { ...cart[id], quantity: cart[id].quantity += 1 } });
  };

  const decrementQuantity = (id) => {
    if (!cart[id] || cart[id].quantity <= 1) {
      const { [id]: _, ...newCart } = cart;
      return setCart({ ...newCart });
    }

    setCart({ ...cart,
      [id]: { ...cart[id], quantity: Math.max(0, cart[id].quantity -= 1) } });
  };

  const inputQuantity = (id, name, price, { target: { value } }) => {
    if (!cart[id]) {
      return setCart({ ...cart, [id]: { id, name, price, quantity: Number(value) } });
    }

    setCart({ ...cart, [id]: { ...cart[id], quantity: Number(value) } });
  };

  const totalPrice = () => {
    let total = 0;
    Object.keys(cart).forEach((key) => {
      total += cart[key].quantity * Number(cart[key].price);
    });

    return parseFloat(total, 2).toFixed(2);
  };

  useEffect(() => {
    console.log(Object.keys(cart).length);
    if (Object.keys(cart).length > 0) {
      setIsDataValid(false);
      console.log(isDataValid);
    } else {
      setIsDataValid(true);
    }
  }, [isDataValid, cart]);

  const handleRedirect = () => {
    history.push('/customer/checkout');
  };

  return list.length ? (
    <div className="all-products-container">
      { list.map(({ id, name, price, urlImage }) => (
        <div key={ id } className="card-item">
          <div
            className="price-div"
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            <span>{ `R$ ${price.replace(/\./, ',')}` }</span>
          </div>
          <img
            id={ name }
            src={ urlImage }
            alt={ name }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <div className="product-info">
            <div data-testid={ `customer_products__element-card-title-${id}` }>
              <span>{ name }</span>
            </div>
            <section>
              <div>
                <Button
                  onclick={ () => incrementQuantity(id, name, price) }
                  data="+"
                  testid={ `customer_products__button-card-add-item-${id}` }
                />
              </div>
              <div>
                <input
                  type="number"
                  value={ !cart[id] ? 0 : cart[id].quantity }
                  data-testid={ `customer_products__input-card-quantity-${id}` }
                  onChange={ (event) => inputQuantity(id, name, price, event) }
                />
              </div>
              <div>
                <Button
                  onclick={ () => decrementQuantity(id) }
                  data="-"
                  testid={ `customer_products__button-card-rm-item-${id}` }
                />
              </div>
            </section>
          </div>
        </div>
      )) }
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ handleRedirect }
        disabled={ isDataValid }
        className="cart-button"
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { `Ver Carrinho:  R$ ${totalPrice().toString().replace(/\./, ',')}` }
        </p>
      </button>
    </div>
  ) : <p>Loading</p>;
};

export default ItemCard;

ItemCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// localStorage.clear();
// localStorage.setItem('user', "")
