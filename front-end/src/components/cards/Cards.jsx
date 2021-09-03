import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocal, clearWithZero } from '../../services/products';

export default function Cards({ cardInfos, retrieveSumFromChild }) {
  const [currentQuantityToBuy, setCurrentQuantityToBuy] = useState(0);
  const [currentPriceSum, setCurrentPriceSum] = useState(0);
  const { price, nameAndQuantityInMl, thumbNail, id } = cardInfos;
  const minimumToRemove = -1;
  const minimumToAdd = 1;

  useEffect(() => {
    const productObj = {
      id, nameAndQuantityInMl, price, quantity: currentQuantityToBuy };
    const saveToStorage = (objToSave) => {
      addToLocal(objToSave);
    };
    saveToStorage(productObj);
  }, [id, nameAndQuantityInMl, price, currentQuantityToBuy]);

  useEffect(() => {
    clearWithZero();
  }, []);

  const sumValueOfProducts = (quantity) => {
    const newPriceSum = price * (currentQuantityToBuy + quantity);
    const calculateSum = newPriceSum - currentPriceSum;
    retrieveSumFromChild(calculateSum);
    setCurrentPriceSum(newPriceSum);
  };

  return (
    <div
      style={ {
        border: '1px solid #EAF1EF',
        width: '23%',
        margin: '0 10px 0 0',
        boxShadow: '1px 5px 5px 1px #848484',
      } }
    >
      <p
        style={ {
          position: 'absolute',
          margin: '10px 0 0 8px',
        } }
      >
        R$
        {' '}
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price.split('.').join(',')}
        </span>
      </p>
      <div
        style={ {
          display: 'flex',
          justifyContent: 'center',
        } }
      >
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          style={ {
            width: 'auto',
            height: '200px',
            margin: '10px',
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
                return setCurrentQuantityToBuy(0);
              }
              setCurrentQuantityToBuy(currentQuantityToBuy - 1);
              sumValueOfProducts(minimumToRemove);
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
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ currentQuantityToBuy }
            // type="number"
            onChange={ (e) => {
              setCurrentQuantityToBuy(Number(e.target.value));
              console.log('entrou aqui');
              sumValueOfProducts(Number(e.target.value));
            } }
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
              sumValueOfProducts(minimumToAdd);
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
  price: PropTypes.number,
  nameAndQuantityInMl: PropTypes.string,
  thumbNail: PropTypes.string,
  id: PropTypes.number,
  calculateSum: PropTypes.func,
}.isRequired;
