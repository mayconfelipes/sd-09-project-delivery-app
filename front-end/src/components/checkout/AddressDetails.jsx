import React from 'react';
import PropTypes from 'prop-types';
import { useDeliveryContext } from '../../context/deliveryProvider';

const AddressDetails = ({ names }) => {
  const { address, setAddress } = useDeliveryContext();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setAddress({ ...address, [name]: value });
  };

  return (
    <div className="address-container">
      <div className="address-inputs">
        <label htmlFor="seller">
          P. vendedora Responsavel:
          <select
            id="seller"
            name="vendedor"
            value={ address.vendedor }
            onChange={ handleInputChange }
            data-testid="customer_checkout__select-seller"
          >
            {names.map(({ id, name }) => (
              <option key={ id } value={ id }>{ name }</option>
            ))}
          </select>
        </label>
      </div>
      <div className="address-inputs">
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            name="address"
            value={ address.address }
            placeholder="Rua Ze da pinga"
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-address"
          />
        </label>
      </div>
      <div className="address-inputs">
        <label htmlFor="address-number">
          Numero
          <input
            type="text"
            id="address-number"
            className="address-number"
            name="numero"
            value={ address.numero }
            placeholder="051"
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </div>
    </div>
  );
};

AddressDetails.propTypes = {
  names: PropTypes.arrayOf().isRequired,
};

export default AddressDetails;
