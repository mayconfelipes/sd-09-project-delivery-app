import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/contexts';
import requestApi from '../services/api';

const useDataSellers = () => {
  const [sellers, setSellers] = useState(() => []);
  const { token } = useUserDataContext();

  useEffect(
    async () => {
      const { data: { sellers: requestedSellers } } = await requestApi({
        method: 'get',
        endpoint: 'seller/',
        token,
      });

      setSellers(requestedSellers);
    },
    [],
  );

  return sellers;
};

export default useDataSellers;
