import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import NavBarCustomer from '../components/navBarCustomer';
import CartTotal from '../components/CartTotal';
import '../styles/customerProducts.css';

const CustomerProducts = () => {
  const [order, setOrder] = useState([]);
  const {
    getProducts,
    setProducts,
    products,
    setCurrentOrder,
    currentOrder,
    setCurrentOrderTotal,
  } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
    setOrder(currentOrder);
  });

  const changeQttByInput = () => {
    console.log('Olá');
  };

  const changeQtt = ({ target }) => {
    const getBtn = document.querySelector(`.${target.className}`);

    let selector = '';
    if (getBtn.textContent === '+') {
      selector = getBtn.previousSibling;
    } else {
      selector = getBtn.nextSibling;
    }

    const product = products.filter((item) => item.name === selector.className);

    // value é a quantidade dentro dos inputs

    let value = Number(selector.value);
    if (getBtn.textContent === '+') {
      value += 1;
    } else if (value >= 1) {
      value -= 1;
    }

    const index = order.findIndex((item) => item.id === product[0].id);

    if (index < 0) {
      order.push({
        id: product[0].id,
        quantity: value,
        price: product[0].price,
        name: product[0].name });
    } else {
      order[index].quantity = value;
    }
    setOrder(order);
    setCurrentOrder(order);
    setCurrentOrderTotal(currentOrder
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2));

    console.log(order);

    selector.value = value;
  };

  return (
    <div>
      <NavBarCustomer textProp="produtos" />

      <div className="container_cards">
        {
          products.map((product, index) => (
            <div className="product_card" key={ index }>
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
                    data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                    onClick={ changeQtt }
                  >
                    -
                  </button>
                  <input
                    type="Number"
                    min="0"
                    // value="0"
                    className={ `${product.name}` }
                    data-testid={
                      `customer_products__input-card-quantity-${product.id}`
                    }
                    onChange={ changeQttByInput }
                  />
                  <button
                    className={ `incremento-${product.id}` }
                    type="button"
                    data-testid={
                      `customer_products__button-card-add-item-${product.id}`
                    }
                    onClick={ changeQtt }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Link
        to="/customer/checkout"
      //   className="ver_carrinho"
      //   data-testid="customer_products__checkout-bottom-value"
      // >
      //   <span>{ `Ver carrinho: R$${currentOrderTotal}`}</span>
      >
        <CartTotal
          testId="customer_products__checkout-bottom-value"
          text=""
          className="ver_carrinho"
        />
      </Link>
    </div>
  );
};

export default CustomerProducts;
