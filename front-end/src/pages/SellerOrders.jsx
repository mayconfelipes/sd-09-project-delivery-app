import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  const response = async (data) => {
    console.log(data);
    await axios({
      method: 'get',
      url: 'http://localhost:3001//byUserId/29',
      headers: {
        authorization: data.token,
      },
    });
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    response(userData);
    setSales(response);
    console.log(sales);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      test
    </div>
  );
}

export default SellerOrders;
