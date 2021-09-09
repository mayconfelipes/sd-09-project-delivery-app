import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardProduct.css';

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
    <div className="card-products-container">
      <section className="card-products-top">
        <p
          className="product-price"
          data-testid={ `${prefix}element-card-price-${id}` }
        >
          {`R$ ${brazilianPrice()}`}
        </p>
        <img
          src={ urlImage }
          alt={ name }
          className="product-image"
          data-testid={ `${prefix}img-card-bg-image-${id}` }
        />
      </section>
      <section className="card-products-botton">
        <div className="container-name">
          <p
            className="product-name"
            data-testid={ `${prefix}element-card-title-${id}` }
          >
            {name}
          </p>
        </div>
        <div className="quantity-buttons">
          <button
            className="products-less-button"
            type="button"
            onClick={ removeItem }
            data-testid={ `${prefix}button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            type="numer"
            className="input-card-quantity"
            value={ quantity }
            onChange={ (e) => alterNumber(e.target.value, name) }
            data-testid={ `${prefix}input-card-quantity-${id}` }
          />
          <button
            className="products-mor-button"
            type="button"
            onClick={ addItem }
            data-testid={ `${prefix}button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </section>
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
