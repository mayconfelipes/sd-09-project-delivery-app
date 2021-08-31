import React, { useContext } from 'react';
import context from '../services/context';

function InputAddressNumber() {
  const { setOrderAddressNumber } = useContext(context);
  return (
    <div>
      <label htmlFor="address-number-input">
        Número
        <input
          type="number"
          name="address-number-input"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setOrderAddressNumber(e.target.value) }
        />
      </label>
    </div>
  );
}

export default InputAddressNumber;
