import React, { useContext } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import useStyle from './custumerProducts.style';
import dataForCardMainPage from '../../data/mockedData';
import GlobalContext from '../../context/GlobalContext';

export default function MainPage() {
  const classes = useStyle();
  const { productsList } = useContext(GlobalContext);
  console.log('**************************************');
  console.log(dataForCardMainPage);
  console.log('------------------------------------------');
  console.log(productsList);
  console.log('**************************************');

  return (
    <div>
      <NavBar />
      <div className={ classes.cardContainer }>
        {
          productsList
            .map((cardInfos, index) => <Cards key={ index } cardInfos={ cardInfos } />)
        }
      </div>
    </div>
  );
}
