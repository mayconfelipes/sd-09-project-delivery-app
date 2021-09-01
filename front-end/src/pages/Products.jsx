import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ProductCard from '../Components/ProductCard';

function Products() {
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const updateTotalPrice = (action, productPrice) => {
    const currTotalPrice = totalPrice;

    if (action === 'subtract') {
      setTotalPrice(currTotalPrice - parseFloat(productPrice));
    } else {
      setTotalPrice(currTotalPrice + parseFloat(productPrice));
    }
  };

  const addToCart = ({ id, name, price }) => {
    const existentProduct = cart.find((product) => product.id === id);

    if (!existentProduct) {
      setCart([...cart, { id, name, price: parseFloat(price) }]);
    } else {
      existentProduct.price += parseFloat(price);
    }
  };

  const removeFromCart = ({ id, price }) => {
    if (!cart.length) return;

    const existentProduct = cart.find((product) => product.id === id);

    if (existentProduct.price === parseFloat(price)) {
      const cartArr = [...cart];

      cartArr.splice(cartArr.findIndex((product) => product.id === id), 1);

      setCart(cartArr);
    } else {
      existentProduct.price -= parseFloat(price);
    }
  };

  const fetchProducts = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/product/',
    });

    return response.data;
  };

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchProducts());
    };

    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <ul>
        {products.map((product) => (
          <li key={ product.id }>
            <ProductCard
              { ...product }
              updateTotalPrice={ updateTotalPrice }
              addToCart={ addToCart }
              removeFromCart={ removeFromCart }
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={ () => {
          localStorage.setItem('cart', JSON.stringify(cart));
          history.push('/customer/checkout');
        } }
      >
        Checkout
      </button>
    </>
  );
}

export default Products;
