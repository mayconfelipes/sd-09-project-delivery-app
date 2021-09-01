import React, { useContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import '../App.css';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const {
    products,
    getProducts,
    // productsCart,
    loading } = useContext(AppContext);

  const [local, setLocal] = useState({});

  let total = 0;
  useEffect(() => {
    getProducts();
    setLocal(JSON.parse(localStorage.getItem('productCart')));
  }, [getProducts]);
  const router = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return router.push('/');
    }
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      jwt.verify(token, SECRET_KEY);
    } catch (error) {
      localStorage.removeItem('user');
      router.push('/');
    }
  });

  const addProduct = (name) => {
    const localProductCart = JSON.parse(localStorage.getItem('productCart'));
    const currentQty = localProductCart[name].quantity;
    localStorage.setItem('productCart', JSON.stringify({ ...localProductCart,
      [name]: { ...localProductCart[name], quantity: currentQty + 1 } }));

    setLocal(JSON.parse(localStorage.getItem('productCart')));
  };

  const decreasesProduct = (name) => {
    const localProductCart = JSON.parse(localStorage.getItem('productCart'));
    const currentQty = localProductCart[name].quantity;
    if (currentQty <= 0) return;
    localStorage.setItem('productCart', JSON.stringify({ ...localProductCart,
      [name]: { ...localProductCart[name], quantity: currentQty - 1 } }));

    setLocal(JSON.parse(localStorage.getItem('productCart')));
  };

  const totalPrice = () => {
    const productsKeys = Object.keys(local);
    productsKeys.forEach((product) => {
      total += local[product].quantity * Number(local[product].price);
    });

    return total.toFixed(2);
  };

  if (loading || !products.length || !Object.keys(local).length) {
    return (
      <div className="main">
        <Navbar />
        <main><h1>loading...</h1></main>
      </div>
    );
  }
  console.log(Object.keys(local));
  return (
    <div className="main">
      <Navbar />
      <main>
        <ul className="main--products">
          {
            products.map(({ name, urlImage, price, id }, index) => (
              <li
                key={ index }
                className="main--products"
              >
                <h4
                  data-testid={ `customer_products__element-card-title-${id}` }
                >
                  {name}
                </h4>
                <img
                  className="main--img"
                  src={ urlImage }
                  alt={ name }
                  data-testid={ `customer_products__img-card-bg-image-${id}` }
                />
                <h1
                  data-testid={ `customer_products__element-card-price-${id}` }
                >
                  {price.replace(/\./ig, ',')}
                </h1>
                <div className="main--add-item-btn">
                  <button
                    data-testid={ `customer_products__button-card-rm-item-${id}` }
                    type="button"
                    onClick={ () => decreasesProduct(name) }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name={ name }
                    data-testid={ `customer_products__input-card-quantity-${id}` }
                    value={ local[name].quantity }
                  />
                  <button
                    data-testid={ `customer_products__button-card-add-item-${id}` }
                    type="button"
                    onClick={ () => addProduct(name) }
                  >
                    +
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </main>
      <Link to="/customer/checkout">
        <button
        // data-testid="customer_products__checkout-bottom-value"
          data-testid="customer_products__button-cart"
          type="button"
          className="button-cart"
        >
          { `Ver Carrinho: ${totalPrice()} `}
        </button>
      </Link>
    </div>
  );
}

export default Products;
