import React, { useContext, useEffect, useState } from 'react';
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
  const [totalValue, setTotalValue] = useState(0);

  const newOrder = [...order];
  let defaultValue = 0;

  const calcTotal = () => {
    if (!newOrder) return defaultValue;

    console.log(newOrder);

    if (newOrder) {
      defaultValue = newOrder.reduce(
        (acc, cur) => acc + (cur.quantity * cur.price), 0,
      );
    }

    setTotalValue(defaultValue);
  };

  const increment = ({ target }) => {
    const input = target.previousElementSibling;
    const inputValue = Number(input.value);
    input.value = inputValue + 1;

    const product = products.find((item) => item.name === input.className);

    const index = newOrder.findIndex((item) => item.id === product.id);
    const itemExists = newOrder.find((item) => item.id === product.id);

    if (index < 0 || !itemExists) {
      newOrder.push({
        id: product.id,
        quantity: input.value,
        price: Number(product.price),
      });
    } else {
      newOrder[index].quantity = input.value;
    }

    setOrder(newOrder);
    calcTotal();
  };

  const decrement = ({ target }) => {
    const input = target.nextElementSibling;
    const inputValue = Number(input.value);
    if (inputValue > 0) input.value = inputValue - 1;

    const product = products.find((item) => item.name === input.className);

    const index = newOrder.findIndex((item) => item.id === product.id);

    newOrder[index].quantity = input.value;

    setOrder(newOrder);
    calcTotal();
  };

  const handleChange = ({ currentTarget }) => {
    const product = products.find((item) => item.name === currentTarget.className);

    const index = newOrder.findIndex((item) => item.id === product.id);
    const itemExists = newOrder.find((item) => item.id === product.id);

    if (index < 0 || !itemExists) {
      newOrder.push({
        id: product.id,
        quantity: Number(currentTarget.value),
        price: Number(product.price),
      });
    } else {
      newOrder[index].quantity = currentTarget.value;
    }

    setOrder(newOrder);
    calcTotal();
  };

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
    calcTotal();
  }, []);

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
                    onClick={ decrement }
                  >
                    -
                  </button>
                  <input
                    type="Number"
                    min="0"
                    defaultValue="0"
                    className={ `${product.name}` }
                    data-testid={
                      `customer_products__input-card-quantity-${product.id}`
                    }
                    onChange={ handleChange }
                  />
                  <button
                    className={ `incremento-${product.id}` }
                    type="button"
                    data-testid={
                      `customer_products__button-card-add-item-${product.id}`
                    }
                    onClick={ increment }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Link to="/customer/checkout">
        <button
          type="button"
          disabled={ totalValue <= 0 }
          className="ver_carrinho"
          data-testid="customer_products__button-cart"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            { totalValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) }
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CustomerProducts;
