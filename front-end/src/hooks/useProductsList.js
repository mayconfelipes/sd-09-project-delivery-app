import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/contexts';
import requestApi from '../services/api';

const useProductsList = () => {
  const [products, setProducts] = useState(() => []);
  const { token } = useUserDataContext();

  useEffect(() => {
    const requestProducts = async () => {
      const { data: { products: requestedProducts } } = await requestApi(
        { method: 'get', endpoint: 'customer/products', token },
      );
      setProducts(requestedProducts);
    };
    requestProducts();
  }, [token]);

  return products;
};

export default useProductsList;
