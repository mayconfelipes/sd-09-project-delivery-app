import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({
  role,
  id,
  total_price: price,
  delivery_address: adress,
  delivery_number: addressNumber,
  sale_date: date,
  status,
}) {
  const handleClick = () => {};

  const statusDiv = (userRole) => {
    if (userRole === 'seller') {
      return (
        <div>
          <button type="button" onClick={ handleClick }>
            { status }
          </button>
        </div>
      );
    }
    return (
      <div>
        <p>{ status }</p>
      </div>
    );
  };

  const addressDiv = () => (
    <div>
      { `${adress}, ${addressNumber}` }
    </div>
  );

  return (
    <div>
      <div>
        <div>
          <p>{ `Pedido: ${id}` }</p>
        </div>
        { statusDiv(role) }
        <div>
          <p>{ date }</p>
          <p>{ price }</p>
        </div>
      </div>
      { role === 'seller' && addressDiv() }
    </div>
  );
}

OrderCard.propTypes = {
  role: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  total_price: PropTypes.number.isRequired,
  delivery_address: PropTypes.string.isRequired,
  delivery_number: PropTypes.number.isRequired,
  sale_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;
