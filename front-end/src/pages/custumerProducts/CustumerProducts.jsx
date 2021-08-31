import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import useStyle from './custumerProducts.style';
import GlobalContext from '../../context/GlobalContext';

export default function MainPage() {
  const classes = useStyle();
  const [sumOfProducts, setSumOfProducts] = useState(0);
  const { productsList } = useContext(GlobalContext);

  const retrieveSumFromChild = (totalPrice) => {
    const sum = (sumOfProducts + totalPrice);
    const sumRounded = Math.round(sum * 100) / 100;
    console.log(sumRounded);
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
      <Link to="/customer/checkout" className={ classes.textLink }>
        <div className={ classes.sumContainer }>
          <p
            data-testid="customer_products__button-cart"
            className={ classes.textSum }
          >
            Ver Carrinho: R$
            {sumOfProducts.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}
