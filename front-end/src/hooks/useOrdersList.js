import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/contexts';
import requestApi from '../services/api';

const useOrdersList = () => {
  const [orders, setOrders] = useState(() => []);
  const { token } = useUserDataContext();

  useEffect(() => {
    const requestProducts = async () => {
      const { data: { products: requestedProducts } } = await requestApi(
        { method: 'get', endpoint: 'customer/products', token },
      );
      setOrders(requestedProducts);
    };
    requestProducts();
  }, [token]);

  return orders;
};

export default useOrdersList;
