import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';

function Products() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);



  const updateTotalPrice = (productPrice, action) => {
    const currTotalPrice = totalPrice;

    if (action === 'subtract') {
      setTotalPrice(currTotalPrice - productPrice);
    }

    setTotalPrice(currTotalPrice + productPrice);
  };

  const fetchProducts = async (useProduct) => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/product/',
    });

    return response;
  };

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchProducts());
    };

    getProducts();
  }, []);

  return (
    <NavBar />
  );
}

export default Products;
