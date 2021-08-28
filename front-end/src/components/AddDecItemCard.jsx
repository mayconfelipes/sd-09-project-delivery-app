import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// função para incrementar e decrementar

const decrement = (event) => {
  const idProduct = event.target.id.split('-')[1]; // só pega o id
  const qtdProduct = document.getElementById(`result-${idProduct}`).value - 1; // montou result com id do produto -1
  if (qtdProduct >= 0) {
    document.getElementById(`result-${idProduct}`).value = qtdProduct;
  } // decrementa 1 a cada click
};

const increment = (event) => {
  const idProduct = event.target.id.split('-')[1]; // só pega o id
  let qtdProduct = parseInt(
    document.getElementById(`result-${idProduct}`).value,
    10,
  );
  qtdProduct += 1;
  document.getElementById(`result-${idProduct}`).value = qtdProduct;
  // incrementa 1 a cada click
};

const AddDecItemCard = (
  { id },
) => (
  <div>
    <Button
      buttonText="-"
      id={ `negative-${id}` } // depois quebrar e usar o valor do id
      dataTestId={ `customer_products__button-card-add-item-${id}` } // apresentar o id do produto, criar a lógica aqui
      onClick={ decrement }
      classStyle="card-button card-button-left"
    />
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` } // inserir o id
      id={ `result-${id}` } // usar o id do produto
      value={ 0 }
      className="card-input"
    />
    <Button
      buttonText="+"
      id={ `positive-${id}` }
      dataTestId={ `customer_products__button-card-rm-item-${id}` } // pegar o id do produto
      onClick={ increment }
      classStyle="card-button card-button-right"
    />
  </div>
);

AddDecItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddDecItemCard;
