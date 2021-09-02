import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import NavBarCustomer from '../components/navBarCustomer';
// import CartTotal from '../components/CartTotal';
import '../styles/customerProducts.css';

const CustomerProducts = () => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [redirectToCheckout, setRedirect] = useState(false);

  const {
    getProducts,
    getSellers,
    products,
    setCurrentOrder,
    // currentOrder,
    setCurrentOrderTotal,
    currentOrderTotal,
  } = useContext(ProductsContext);

  // const history = useHistory();

  useEffect(() => {
    Promise.all([
      getProducts(),
      getSellers(),
    ]).then(() => setIsLoading(false));
  }, []);

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
      selector.value = value;
    } else if (value >= 1) {
      value -= 1;
      selector.value = value;
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
    const newOrder = order.filter((item) => item.quantity > 0);
    const orderTotalValue = newOrder
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
    setOrder(newOrder);
    setCurrentOrder(newOrder);
    setCurrentOrderTotal(orderTotalValue);
  };

  if (redirectToCheckout) return <Redirect to="/customer/checkout" />;
  return !isLoading
    ? (
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
                      data-testid={
                        `customer_products__button-card-rm-item-${product.id}`
                      }
                      onClick={ (e) => changeQtt(e) }
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
                      onChange={ changeQttByInput }
                    />
                    <button
                      className={ `incremento-${product.id}` }
                      type="button"
                      data-testid={
                        `customer_products__button-card-add-item-${product.id}`
                      }
                      onClick={ (e) => changeQtt(e) }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ currentOrderTotal <= 0 }
          onClick={ () => setRedirect(true) }
          className="ver_carrinho"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            { currentOrderTotal.toString().replace('.', ',') }
          </span>
        </button>
      </div>) : <span>Carregando...</span>;
};

export default CustomerProducts;
