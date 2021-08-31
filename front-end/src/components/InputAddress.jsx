import React, { useContext } from 'react';
import context from '../services/context';

function InputAddress() {
  const { setOrderAddress } = useContext(context);
  return (
    <div>
      <label htmlFor="address-input">
        Endereço
        <input
          type="text"
          name="address-input"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setOrderAddress(e.target.value) }
        />
      </label>
    </div>
  );
}

export default InputAddress;
