import React, { useState, useEffect } from 'react';
import { getCostumerOrders } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';
import CardCustumerOrder from '../Components/newComponents/CardCustumerOrder';

function CustumeOrders() {
  const [listOrders, setListOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const productsList = await getCostumerOrders(token);
      setListOrders(productsList);
    };
    fetchOrders();
  }, []);

  function mountList() {
    const { email } = JSON.parse(localStorage.getItem('user'));

    const seletctOrders = listOrders.filter(
      (order) => order.user.email === email,
    );

    return (
      <div>
        {
          seletctOrders.map(
            (order) => <CardCustumerOrder selectOrder={ order } key={ order.id } />,
          )
        }
      </div>
    );
  }

  return (
    <>
      <NavBar />
      { mountList() }
    </>
  );
}

export default CustumeOrders;
