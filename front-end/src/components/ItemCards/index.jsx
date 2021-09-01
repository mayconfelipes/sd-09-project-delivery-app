import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const ItemCard = ({ list }) => (
  list.length ? (
    <div>
      { list.map(({ id, name, price, urlImage }) => (
        <div key={ id }>
          <img
            id={ name }
            src={ urlImage }
            alt={ name }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <div>
            <div data-testid={ `customer_products__element-card-title-${id}` }>
              <span>{ name }</span>
            </div>
            <div data-testid={ `customer_products__element-card-price-${id}` }>
              <span>{ price.replace(/\./, ',') }</span>
            </div>
            <div>
              <Button
                data="+"
                testid={ `customer_products__button-card-add-item-${id}` }
              />
            </div>
            <div>
              <input
                type="text"
                value="0"
                data-testid={ `customer_products__input-card-quantity-${id}` }
              />
            </div>
            <div>
              <Button
                data="-"
                testid={ `customer_products__button-card-rm-item-${id}` }
              />
            </div>
          </div>
        </div>
      )) }
      <div data-testid="customer_products__button-cart">
        <Button data="Ver carrinho" />
      </div>
    </div>
  ) : <p>Loading</p>
);

export default ItemCard;

ItemCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// localStorage.clear();
// localStorage.setItem('user', "")
