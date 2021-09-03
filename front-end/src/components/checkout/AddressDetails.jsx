import React from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { useDeliveryContext } from '../../context/deliveryProvider';
// axios usar get na rota /seller -> pegar vendedores

const AddressDetails = ({ names }) => {
  const { address, setAddress } = useDeliveryContext();

  const handleInputChange = ({ target }) => {
    console.log('target >', target);
    const { name, value } = target;

    setAddress({ ...address, [name]: value });
  };

  console.log('address > ', address);

  return (
    <div className="order-list-container">
      <label htmlFor="seller">
        P. vendedora Responsavel:
        <select
          id="seller"
          name="vendedor"
          value={ address.vendedor }
          onChange={ handleInputChange }
          data-testid="customer_checkout__select-seller"
        >
          <option value="selecio-vendedor">selecio-vendedor</option>
          {names.map((name, i) => (
            <option key={ i } value={ name }>{ name }</option>
          ))}
        </select>
      </label>
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
      <label htmlFor="address-number">
        Numero
        <input
          type="text"
          id="address-number"
          name="numero"
          value={ address.numero }
          placeholder="051"
          onChange={ handleInputChange }
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
