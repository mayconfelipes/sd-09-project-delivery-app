import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from './context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [saleState, setSaleState] = useState({});
  const [sellersId, setSellersId] = useState([]);
  const [filteredCart, setFilteredCart] = useState([]);
  const router = useHistory();

  const getLocalToken = () => JSON.parse(localStorage.getItem('user'));

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      setUser(response.data);
      if (response.data) {
        router.push('/customer/products');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setProductCartInLocalStorage = (data) => {
    localStorage.setItem('productCart', JSON.stringify(data));
  };

  const getProducts = async () => {
    if (products.length) return;
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
      const productObject = {};
      response.data.forEach(({ name, price }) => {
        productObject[name] = { name, quantity: 0, price };
      });
      setProductsCart(productObject);
      if (!JSON.parse(localStorage.getItem('productCart'))) {
        setLoading(false);
        return setProductCartInLocalStorage(productObject);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSellersId = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seller');
      setSellersId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSaleById = async () => {
    const userLocal = getLocalToken();
    try {
      const response = await axios.get('http://localhost:3001/sales', {
        headers: { authorization: userLocal.token },
      });
      setSales(response.data);
      setUser(userLocal);
    } catch (error) {
      setSales([]);
      console.log(error);
    }
  };

  const sendSale = async (sale) => {
    const { token } = getLocalToken();
    const {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productCart,
    } = sale;

    try {
      const response = await axios.post('http://localhost:3001/sales', {
        sellerId, totalPrice, deliveryAddress, deliveryNumber, productCart,
      }, {
        headers: { authorization: token },
      });

      // setSaleId(response.data);
      setSaleState(response.data);
      const { id } = response.data;
      router.push(`/customer/orders/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const setUserInLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  const verifyUser = () => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (!user.name && storage) {
      setUser(storage);
    }
  };

  const updateFilteredCart = () => {
    const cartStorage = JSON.parse(localStorage.getItem('productCart'));
    const filterCart = Object.values(cartStorage)
      .filter(({ quantity }) => quantity > 0);
    setFilteredCart(filterCart);
  };

  const contextValue = {
    user,
    setUser,
    signIn,
    getProducts,
    getSaleById,
    setSales,
    sales,
    products,
    setUserInLocalStorage,
    productsCart,
    setProductsCart,
    loading,
    setProductCartInLocalStorage,
    sendSale,
    saleState,
    setSellersId,
    getSellersId,
    sellersId,
    verifyUser,
    updateFilteredCart,
    filteredCart,
    setFilteredCart,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
