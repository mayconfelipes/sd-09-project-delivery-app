import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Header from '../components/Header';
import CartButton from '../components/CartButton';
import '../styles/Produtos.css';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(
    () => {
      if (userData) {
        const { token } = userData;
        const config = {
          headers: { Authorization: `${token}` },
        };
        const PRODUCTS_ENDPOINT = 'http://localhost:3001/api/products';
        const fetchData = async () => {
          await axios.get(PRODUCTS_ENDPOINT, config)
            .then((d) => setProducts(d.data))
            .catch((e) => setError(e.response.data.message));
        };
        fetchData();
      }
    }, [userData],
  );
  if (!userData || error) {
    localStorage.clear();
    return (<Redirect
      to={ {
        pathname: '/login',
        state: { error },
      } }

    />);
  }
  return (
    <>
      <Header />
      <main className="products__page">
        <section className="products__list">
          {
            products.map(
              (Produto) => <CardProduct product={ Produto } key={ Produto.id } />,
            )
          }
        </section>
        <CartButton
          className="products__cart__button"
          data-testid="customer_products__button-cart"
        />
      </main>
    </>
  );
};

export default Produtos;
