import React, { useContext, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import '../App.css';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const {
    products,
    getProducts,
    productsCart, setProductsCart, loading } = useContext(AppContext);

  let total = 0;
  useEffect(() => {
    getProducts();
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

  const handleClick = () => {
    router.push('/customer/checkout');
  };

  const addProduct = (name) => {
    const currentQty = productsCart[name].qty;
    setProductsCart({
      ...productsCart, [name]: { ...productsCart[name], qty: currentQty + 1 },
    });
    console.log(productsCart);
  };

  const decreasesProduct = (name) => {
    const currentQty = productsCart[name].qty;
    if (currentQty <= 0) return;
    setProductsCart({
      ...productsCart, [name]: { ...productsCart[name], qty: currentQty - 1 },
    });
    console.log(productsCart);
  };

  const totalPrice = () => {
    const productsKeys = Object.keys(productsCart);
    productsKeys.forEach((product) => {
      total += productsCart[product].qty * Number(productsCart[product].price);
    });

    console.log(total);
    return total.toFixed(2);
  };

  if (loading) return <h1>loading...</h1>;

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
                    value={ productsCart[name].qty }
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
      <button
        // data-testid="customer_products__checkout-bottom-value"
        data-testid="customer_products__button-cart"
        type="button"
        className="button-cart"
        onClick={ () => handleClick() }
      >
        { `Ver Carrinho: ${totalPrice()} `}
      </button>
    </div>
  );
}

export default Products;
