import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import NavBarCustomer from '../components/navBarCustomer';
import '../styles/customerProducts.css';

const CustomerProducts = () => {
  const {
    getProducts,
    setProducts,
    products,
    setOrder,
    order,
  } = useContext(ProductsContext);

  const newOrder = [...order];
  let localValue = 0;

  const calcTotal = () => {
    if (!newOrder) return 0;

    if (newOrder) {
      localValue = newOrder.reduce(
        (acc, cur) => acc + (cur.quantity * cur.price), 0,
      );
    }

    return localValue;
  };

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  const changeQttByInput = ({ currentTarget }) => {
    const product = products.filter((item) => item.name === currentTarget.className);
    const index = newOrder.findIndex((item) => item.id === product[0].id);
    const itemExists = newOrder.find((item) => item.id === product[0].id);

    const value = Number(currentTarget.value);
    if (index < 0 || !itemExists) {
      newOrder.push({
        id: product[0].id,
        quantity: value,
        price: Number(product[0].price),
      });
    } else {
      newOrder[index].quantity = value;
    }

    setOrder(newOrder);
    localStorage.setItem('order', JSON.stringify(newOrder));
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

    let value = Number(selector.value);
    if (getBtn.textContent === '+') {
      value += 1;
    } else if (value >= 1) {
      value -= 1;
    }

    const index = newOrder.findIndex((item) => item.id === product[0].id);
    const itemExists = newOrder.find((item) => item.id === product[0].id);

    if (index < 0 || !itemExists) {
      newOrder.push({
        id: product[0].id,
        quantity: value,
        price: Number(product[0].price),
      });
    } else {
      newOrder[index].quantity = value;
    }

    setOrder(newOrder);
    localStorage.setItem('order', JSON.stringify(newOrder));

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

      <Link to="/checkout">
        <button
          type="button"
          className="ver_carrinho"
          data-testid="customer_products__button-cart"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            { calcTotal().toFixed(2).toString().replace('.', ',') }
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CustomerProducts;
