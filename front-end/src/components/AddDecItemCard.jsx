import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { decrement, increment } from '../utils/actionAddDec';
import testid from '../utils/dataTestIds';

const AddDecItemCard = ({ id }) => {
  // const [sumTotal, setSumTotal] = useState(0);
  // // setSumTotal();
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
        value={ 0 }
        className="card-input"
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
