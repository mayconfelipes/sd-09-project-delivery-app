import React, { useContext } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import useStyle from './custumerProducts.style';
import GlobalContext from '../../context/GlobalContext';

export default function MainPage() {
  const classes = useStyle();
  const { productsList } = useContext(GlobalContext);

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
