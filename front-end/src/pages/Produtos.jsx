import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Header from '../components/Header';
import Provider from '../context/Provider';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const userData = JSON.parse(localStorage.getItem('user'));

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
    localStorage.removeItem('user');
    return (<Redirect
      to={ {
        pathname: '/login',
        state: { error },
      } }

    />);
  }
  return (
    <Provider>
      <Header />
      <section>
        {
          products.map(
            (Produto) => <CardProduct product={ Produto } key={ Produto.id } />,
          )
        }
      </section>
    </Provider>
  );
};

export default Produtos;
