import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/contexts';
import requestApi from '../services/api';

const useResquestItems = ({ endpoint, responseKey }) => {
  const [items, setItems] = useState(() => []);
  const { token } = useUserDataContext();

  useEffect(() => {
    const requestProducts = async () => {
      const { data: { [responseKey]: requestedItems } } = await requestApi(
        { method: 'get', endpoint, token },
      );
      console.log('requestedItems', requestedItems);
      setItems(requestedItems);
    };
    requestProducts();
  }, [token]);

  return items;
};

export default useResquestItems;
