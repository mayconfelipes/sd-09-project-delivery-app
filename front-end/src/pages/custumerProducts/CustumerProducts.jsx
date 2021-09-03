import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import useStyle from './custumerProducts.style';
import GlobalContext from '../../context/GlobalContext';
import API from '../../services/loginAPI';

export default function MainPage() {
  const classes = useStyle();
  const [sumOfProducts, setSumOfProducts] = useState(0);
  const { productsList, setProductsList } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    async function fetchProducts() {
      const data = await API.fetchProducts();
      setProductsList(data);
    }
    if (productsList.length === 0) {
      fetchProducts();
    }
  }, [productsList, setProductsList]);

  const retrieveSumFromChild = (totalPrice) => {
    const sum = (sumOfProducts + totalPrice);
    const sumRounded = Math.round(sum * 100) / 100;
    setSumOfProducts(sumRounded);
  };

  return (
    <div>
      <NavBar />
      <div className={ classes.cardContainer }>
        {
          productsList
            .map((cardInfos, index) => (
              <Cards
                key={ index }
                cardInfos={ cardInfos }
                retrieveSumFromChild={ retrieveSumFromChild }
              />))
        }
      </div>

      <button
        type="button"
        disabled={ sumOfProducts.toFixed(2).split('.').join(',') === '0,00' }
        className={ classes.sumContainer }
        data-testid="customer_products__button-cart"
        onClick={ () => {
          localStorage.setItem('totalPrice', sumOfProducts);
          history.push('/customer/checkout');
        } }
      >
        <span>Ver Carrinho: R$</span>
        <p
          data-testid="customer_products__checkout-bottom-value"
          className={ classes.textSum }
        >
          {sumOfProducts.toFixed(2).split('.').join(',')}
        </p>
      </button>
    </div>
  );
}
