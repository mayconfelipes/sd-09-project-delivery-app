import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Api from '../services/api';
import {
  getTokenLocalStorage,
  removeUserDataLocalStorage,
  getTotalCartLocalStorage,
  getCarrinhoLocalStorage,
} from '../utils/storage';

import Card from './Card';
import testid from '../utils/dataTestIds';
import Button from './Button';

const CardList = () => {
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
        dataTestId={ testid[21] }
        buttonText={ getTotalCartLocalStorage() }
        onClick={ () => {
          setIsRedirectCart(true);
        } }
        isDisabled={ getCarrinhoLocalStorage().length <= 0 }
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
