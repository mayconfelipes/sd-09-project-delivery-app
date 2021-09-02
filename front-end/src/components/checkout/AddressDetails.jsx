// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// axios usar get na rota /seller -> pegar vendedores

const AddressDetails = ({ names }) => {
  /* const [address, setAddress] = useState({
    vendedor: 'Luiza',
    rua: '',
    numero: '',
  }); */

  console.log('oi');

  return (
    <div className="order-list-container">
      <label htmlFor="responsible-seller">
        P. vendedora Responsavel:
        <select
          type="text"
          name="responsible-seller"
          id="responsible-seller"
          data-testid="customer_checkout__select-seller"
        >
          {names.map((name, i) => <option key={ i }>{ name }</option>)}
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          type="text"
          id="address"
          // value={}
          placeholder="Rua Ze da pinga"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="address-number">
        Numero
        <input
          type="text"
          id="address-number"
          // value={}
          placeholder="051"
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
    </div>
  );
};

AddressDetails.propTypes = {
  names: PropTypes.arrayOf().isRequired,
};

export default AddressDetails;
