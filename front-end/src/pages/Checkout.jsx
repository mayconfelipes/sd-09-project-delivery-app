import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import AppContext from '../hooks/context';
import '../App.css';

function Checkout() {
  const { productsCart, setProductsCart } = useContext(AppContext);
  useEffect(() => {
    console.log(setProductsCart);
    if (!localStorage.getItem('user')) {
      return router.push('/');
    }
  });

  return (
    <div className="main">
      <Navbar />
      <main>
        {productsCart.map((product, index) => (
          <div key={ index }>
            <h1>{index}</h1>
            <h1>{product.name}</h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Checkout;
