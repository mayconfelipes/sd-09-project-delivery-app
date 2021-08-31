import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router';
import Api from '../services/api';
import AppContext from '../context/AppContext';
import {
  getTokenLocalStorage,
  removeUserDataLocalStorage,
} from '../utils/storage';

import Card from './Card';
import testid from '../utils/dataTestIds';
import Button from './Button';

const CardList = () => {
  const { totalCart } = useContext(AppContext);
  const [productData, setProductData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isRedirectCart, setIsRedirectCart] = useState(false);

  const fetchProducts = async () => { // requisição para o Backend
    const productsAll = await Api.getAllProducts(getTokenLocalStorage());
    if (productsAll.error) {
      return setIsError(true);
    }
    return setProductData(productsAll);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isError) {
    removeUserDataLocalStorage();
    return <Redirect to="/login" />;
  }

  if (isRedirectCart) {
    return <Redirect to="/customer/checkout" />;
  }

  return (
    <div>
      <Button
        id="btn-total-cart"
        dataTestId={ testid[21] } // 21
        buttonText={ totalCart }
        onClick={ () => {
          setIsRedirectCart(true);
        } }
        isDisabled={ totalCart === '0,00' }
      />

      <Button
        id="btn-total-cart"
        dataTestId={ testid[76] } // testando datatestid teste 16
        buttonText={ totalCart }
        onClick={ () => {
          setIsRedirectCart(true);
        } }
        isDisabled={ totalCart === '0,00' }
      />

      <div className="list-products">
        {productData.map((product, index) => (
          <Card
            key={ index }
            id={ product.id }
            price={ product.price }
            title={ product.name }
            image={ product.url_image }
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
