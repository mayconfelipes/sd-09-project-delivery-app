import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';

function SellerSelect() {
  const { allSellers, setSelectedSeller } = useContext(ProductsContext);

  useEffect(() => {
    setSelectedSeller(allSellers[0].id);
  }, []);
  return (
    <label htmlFor="sellers">
      Pessoa Vendedora Responsável
      <select
        data-testid="customer_checkout__select-seller"
        name="sellers"
        onChange={ (e) => setSelectedSeller(e.target.value) }
      >
        { allSellers.map((seller) => (
          <option
            value={ seller.id }
            key={ seller.id }
          >
            { seller.name }
          </option>
        ))}
      </select>
    </label>
  );
}

export default SellerSelect;
