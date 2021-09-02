import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';

function SellerSelect() {
  const { allSellers, setSelectedSeller } = useContext(ProductsContext);

  useEffect(() => {
    setSelectedSeller(allSellers[0].name);
  }, []);
  return (
    <label htmlFor="sellers" data-testid="customer_checkout__select-seller">
      Pessoa Vendedora Responsável
      <select
        name="sellers"
        onChange={ (e) => setSelectedSeller(e.target.value) }
      >
        { allSellers.map((seller) => (
          <option
            value={ seller.name }
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
