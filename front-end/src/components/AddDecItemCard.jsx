import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { decrement, increment, doOnChangeQtdInput } from '../utils/actionAddDec';
import testid from '../utils/dataTestIds';
import { getQtdProductCartLocalStorage } from '../utils/storage';

const QTDDEFAULTSTATE = -1;

const AddDecItemCard = ({ id }) => {
  const [qtdInputOnChange, setQtdInputOnChange] = useState(QTDDEFAULTSTATE);

  const sumTotal = 0;
  return (
    <div>
      {sumTotal}
      <Button
        buttonText="-"
        id={ `negative-${id}` } // para não ter id igual
        dataTestId={ `${testid[19]}${id}` }
        onClick={ decrement }
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
        } }
      />
      <Button
        buttonText="+"
        id={ `positive-${id}` }
        dataTestId={ `${testid[18]}${id}` }
        onClick={ increment }
        classStyle="card-button card-button-right"
      />
    </div>);
};

AddDecItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddDecItemCard;
