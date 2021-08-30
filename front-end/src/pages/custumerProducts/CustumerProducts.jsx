import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Cards from '../../components/cards/Cards';
import useStyle from './mainPage.style';
import dataForCardMainPage from '../../data/mockedData';

export default function MainPage() {
  const classes = useStyle();

  return (
    <div>
      <NavBar />
      <div className={ classes.cardContainer }>
        {
          dataForCardMainPage
            .map((cardInfos, index) => <Cards key={ index } cardInfos={ cardInfos } />)
        }
      </div>
    </div>
  );
}
