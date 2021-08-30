import React from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ list }) => (
  list.length ? (
    <div>
      { list.map(({ id, name, price, urlImage }) => (
        <div key={ id }>
          <img id={ name } src={ urlImage } alt={ name } />
          <div>
            <div>
              <span>{ name }</span>
            </div>
            <div>
              <span>{ price }</span>
            </div>
          </div>
        </div>
      )) }
    </div>
  ) : <p>Loading</p>
);

export default ItemCard;

ItemCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
