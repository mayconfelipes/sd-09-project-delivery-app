import React, { useContext, useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import NavBarCustomer from '../components/navBarCustomer';
// import CartTotal from '../components/CartTotal';
import '../styles/customerProducts.css';
import ProductCard from '../components/ProductCard';

const CustomerProducts = () => {
  // const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [redirectToCheckout, setRedirect] = useState(false);

  const {
    getProducts,
    getSellers,
    products,
    // setCurrentOrder,
    // // currentOrder,
    // setCurrentOrderTotal,
    currentOrderTotal,
    setUserInfo,
  } = useContext(ProductsContext);

  const history = useHistory();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('user')));
    Promise.all([
      getProducts(),
      getSellers(),
    ]).then(() => setIsLoading(false));
  }, []);

  // const changeQttByInput = () => {
  //   console.log('Olá');
  // };

  // const changeQtt = ({ target }) => {
  //   const getBtn = document.querySelector(`.${target.className}`);

  //   let selector = '';
  //   if (getBtn.textContent === '+') {
  //     selector = getBtn.previousSibling;
  //   } else {
  //     selector = getBtn.nextSibling;
  //   }

  //   const product = products.filter((item) => item.name === selector.className);

  //   // value é a quantidade dentro dos inputs

  //   let value = Number(selector.value);
  //   if (getBtn.textContent === '+') {
  //     value += 1;
  //     selector.value = value;
  //   } else if (value >= 1) {
  //     value -= 1;
  //     selector.value = value;
  //   }

  //   const index = order.findIndex((item) => item.id === product[0].id);

  //   if (index < 0) {
  //     order.push({
  //       id: product[0].id,
  //       quantity: value,
  //       price: product[0].price,
  //       name: product[0].name });
  //   } else {
  //     order[index].quantity = value;
  //   }
  //   const newOrder = order.filter((item) => item.quantity > 0);
  //   const orderTotalValue = newOrder
  //     .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
  //   setOrder(newOrder);
  //   setCurrentOrder(newOrder);
  //   setCurrentOrderTotal(orderTotalValue);
  // };

  // if (redirectToCheckout) return <Redirect to="/customer/checkout" />;
  return !isLoading
    ? (
      <div className="products-page">
        <NavBarCustomer textProp="produtos" />

        <div className="container_cards">
          { products.map((product, index) => (
            <ProductCard key={ index } product={ product } />
          ))}
        </div>

        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ currentOrderTotal <= 0 }
          onClick={ () => history.push('/customer/checkout') }
          className="ver_carrinho"
        >
          <span
            className="total-value"
            data-testid="customer_products__checkout-bottom-value"
          >
            { currentOrderTotal > 0 ? currentOrderTotal.toString().replace('.', ',')
              : '0,00' }
          </span>
        </button>
      </div>) : <span>Carregando...</span>;
};

export default CustomerProducts;
