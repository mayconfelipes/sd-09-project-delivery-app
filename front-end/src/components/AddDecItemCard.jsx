import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { decrement, increment, doOnChangeQtdInput } from '../utils/actionAddDec';
import testid from '../utils/dataTestIds';
import {
  getQtdProductCartLocalStorage,
  getTotalCartLocalStorage,
} from '../utils/storage';
import AppContext from '../context/AppContext';

const QTDDEFAULTSTATE = -1;

const AddDecItemCard = ({ id }) => {
  const [qtdInputOnChange, setQtdInputOnChange] = useState(QTDDEFAULTSTATE);
  const { setTotalCart } = useContext(AppContext);

  return (
    <div>
      <Button
        buttonText="-"
        id={ `negative-${id}` } // para não ter id igual
        dataTestId={ `${testid[19]}${id}` }
        onClick={ (event) => {
          decrement(event, setQtdInputOnChange);
          setTotalCart(getTotalCartLocalStorage());
        } }
        classStyle="card-button card-button-left"
      />
      <input
        data-testid={ `${testid[20]}${id}` }
        id={ `qtd-${id}` }
        value={ qtdInputOnChange > QTDDEFAULTSTATE
          ? qtdInputOnChange
          : getQtdProductCartLocalStorage(id) }
        className="card-input"
        onChange={ (event) => {
          doOnChangeQtdInput(event, setQtdInputOnChange);
          setTotalCart(getTotalCartLocalStorage()); // seta no estado o que tem no local storage
        } }
      />
      <Button
        buttonText="+"
        id={ `positive-${id}` }
        dataTestId={ `${testid[18]}${id}` }
        onClick={ (event) => {
          increment(event, setQtdInputOnChange);
          setTotalCart(getTotalCartLocalStorage());
        } }
        classStyle="card-button card-button-right"
      />
    </div>);
};

AddDecItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddDecItemCard;
