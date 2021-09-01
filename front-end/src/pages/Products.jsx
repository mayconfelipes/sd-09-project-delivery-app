import React, { useContext, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../hooks/context';
import Navbar from '../components/Navbar';
import '../App.css';
import ProductCard from '../components/ProductCard';

const SECRET_KEY = 'minhachavesecreta';

function Products() {
  const {
    products,
    getProducts,
    productsCart,
    loading } = useContext(AppContext);

  // const [local, setLocal] = useState({});
  const router = useHistory();
  let total = 0;

  // const getProductsCartLocalStorage = () => (
  //   JSON.parse(localStorage.getItem('productCart')));

  useEffect(() => {
    getProducts();
    // setLocal(getProductsCartLocalStorage());
  }, [getProducts]);

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

  const totalPrice = () => {
    const productsKeys = Object.keys(productsCart);
    productsKeys.forEach((product) => {
      total += productsCart[product].quantity * Number(productsCart[product].price);
    });

    return total.toFixed(2).toString().replace(/\./ig, ',');
  };

  if (loading || !products.length) {
    return (
      <div className="main">
        <Navbar />
        <main><h1>loading...</h1></main>
      </div>
    );
  }

  return (
    <div className="main">
      <Navbar />
      <main>
        <ul className="main--products">
          {
            products.map(({ name, urlImage, price, id }, index) => (
              <ProductCard
                key={ name }
                product={ { name, urlImage, price, id, index } }
              />
            ))
          }
        </ul>
      </main>
      <Link to="/customer/checkout">
        <button
          data-testid="customer_products__button-cart"
          type="button"
          className="button-cart"
        >
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { totalPrice() }
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Products;
