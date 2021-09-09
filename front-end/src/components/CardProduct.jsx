import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardProduct = (props) => {
  const { product: { id, name, price, urlImage }, setChanged } = props;
  const prefix = 'customer_products__';

  const quantityLocal = (prodName) => {
    const item = JSON.parse(localStorage.getItem('products'));
    if (item[prodName]) return item[prodName].quant;
    return 0;
  };

  const [quantity, setQuantity] = useState(quantityLocal(name));

  const setProducts = (quant, productName) => {
    const totalProduct = quant * price;
    const getProducts = JSON.parse(localStorage.getItem('products'));
    const currentProducts = { ...getProducts,
      [productName]: {
        totalProduct, price, quant,
      } };
    localStorage
      .setItem('products', JSON.stringify(currentProducts));
  };

  const alterNumber = (quan, prodName) => {
    if (quan < 1) quan = 0;
    const intQuant = parseInt(quan, 10);
    setQuantity(intQuant);
    setProducts(intQuant, prodName);
    setChanged(`${id}-${quan + 1}`);
  };

  const addItem = () => {
    const intQuant = parseInt(quantity, 10);
    setQuantity(intQuant + 1);
    setProducts(intQuant + 1, name);
    setChanged(`${id}-${quantity + 1}`);
  };

  const removeItem = () => {
    const intQuant = parseInt(quantity, 10);
    if (quantity >= 1) {
      setQuantity(intQuant - 1);
      setProducts(intQuant - 1, name);
      setChanged(`${id}-${quantity + 1}`);
      // setQuantity(0);
      // setProducts(0, name);
      // setChanged(`${id}-${quantity + 1}`);
    }
  };
  const brazilianPrice = () => {
    const minN = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };
  return (
    <div>
      <p data-testid={ `${prefix}element-card-title-${id}` }>{name}</p>
      <p data-testid={ `${prefix}element-card-price-${id}` }>{brazilianPrice()}</p>
      <img
        width="100px"
        src={ urlImage }
        alt={ name }
        data-testid={ `${prefix}img-card-bg-image-${id}` }
      />
      <input
        type="numer"
        value={ quantity }
        onChange={ (e) => alterNumber(e.target.value, name) }
        data-testid={ `${prefix}input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ addItem }
        data-testid={ `${prefix}button-card-add-item-${id}` }
      >
        +
      </button>
      <button
        type="button"
        onClick={ removeItem }
        data-testid={ `${prefix}button-card-rm-item-${id}` }
      >
        -
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isrequired;

export default CardProduct;
