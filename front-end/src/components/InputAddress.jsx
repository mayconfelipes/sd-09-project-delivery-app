import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

function InputAddress() {
  const { setOrderAddress } = useContext(ProductsContext);
  return (
    <label htmlFor="address-input">
      Endereço
      <input
        type="text"
        name="address-input"
        data-testid="customer_checkout__input-address"
        onChange={ (e) => setOrderAddress(e.target.value) }
      />
    </label>
  );
}

export default InputAddress;
