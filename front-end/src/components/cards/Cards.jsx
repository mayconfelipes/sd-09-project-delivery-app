import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cards(props) {
  const [currentQuantityToBuy, setCurrentQuantityToBuy] = useState(0);

  const { cardInfos: { price, nameAndQuantityInMl, thumbNail, id } } = props;
  return (
    <div
      style={ {
        border: '1px solid #EAF1EF',
        width: '23%',
        margin: '0 10px 0 0',
        boxShadow: '1px 5px 5px 1px #848484',
      } }
    >
      <ToastContainer />
      <p
        style={ {
          position: 'absolute',
          margin: '10px 0 0 8px',
        } }
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        R$
        {' '}
        {price}
      </p>
      <div>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          style={ {
            width: '100%',
            height: 'auto',
          } }
          src={ thumbNail }
          alt="Imagem de uma bebida"
        />
      </div>
      <div
        style={ {
          background: '#EAF1EF',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '10px',
        } }
      >
        <p
          style={ {
            width: '100%',
            textAlign: 'center',
            margin: '0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          } }
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {nameAndQuantityInMl}
        </p>
        <div style={ { margin: '10px 0 10px 0', display: 'flex', alignItems: 'center' } }>
          <button
            style={ {
              backgroundColor: '#206B53',
              borderRadius: '8px 0px 0px 8px',
              border: 'none',
              padding: '6px 15px',
              color: '#FFF',
              fontWeight: '900',
              fontSize: '20px',
              cursor: 'pointer',
            } }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              if (currentQuantityToBuy <= 0) {
                toast('Não é permitido números negativos!');
                return setCurrentQuantityToBuy(0);
              }
              setCurrentQuantityToBuy(currentQuantityToBuy - 1);
            } }
            type="button"
          >
            -
          </button>
          <input
            style={ {
              backgroundColor: '#FFF',
              // padding: '8px 15px',
              borderTop: '1px solid black',
              borderBottom: '1px solid black',
              color: '#828282',
              width: '31px',
              height: '31px',
              textAlign: 'center',
            } }
            value={ currentQuantityToBuy }
            onChange={ (e) => setCurrentQuantityToBuy(Number(e.target.value)) }
          />
          <button
            style={ {
              backgroundColor: '#206B53',
              borderRadius: '0px 8px 8px 0px',
              border: 'none',
              padding: '6px 15px',
              color: '#FFF',
              fontWeight: '900',
              fontSize: '20px',
              cursor: 'pointer',
            } }
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => {
              setCurrentQuantityToBuy(currentQuantityToBuy + 1);
              console.log(currentQuantityToBuy);
            } }
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  cardInfos: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      nameAndQuantityInMl: PropTypes.string.isRequired,
      thumbNail: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
