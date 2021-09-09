import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token, role, name } = user;

  async function getData() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    await fetch('http://localhost:3001/customer/products', myInit)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-wrapper-products">
      <NavBar
        userType={ role }
        userName={ name }
      />
      <div className="wrapper-card-product" style={ { marginBottom: '50px' } }>
        { products && products.length > 0 && products.map((product) => (
          <ProductsCard key={ product.id } product={ product } />
        )) }
      </div>
      <div style={ { marginTop: '100px' } }>
        <Cart />
      </div>
    </div>
  );
};

export default Products;
