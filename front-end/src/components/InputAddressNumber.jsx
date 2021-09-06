import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

function InputAddressNumber() {
  const { setOrderAddressNumber } = useContext(ProductsContext);
  return (
    <label htmlFor="address-number-input">
      Número
      <input
        type="number"
        name="address-number-input"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ (e) => setOrderAddressNumber(e.target.value) }
      />
    </label>
  );
}

export default InputAddressNumber;
