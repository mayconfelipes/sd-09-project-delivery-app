import React from 'react';
import useDataSellers from '../../hooks/useDataSellers';
import generateKey from '../../utils/uniqueKeyGenerator';

const CheckoutSelect = () => {
  const sellers = useDataSellers();

  return (
    <select>
      { sellers.map((seller) => (
        <option value={ seller.id } key={ generateKey() }>{ seller.name }</option>
      )) }
    </select>
  );
};

export default CheckoutSelect;
