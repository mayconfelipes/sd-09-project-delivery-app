import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Api from '../services/api';

function OrdersPage() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [sales, setSales] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const setInitialInfos = async () => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      return setRedirect(true);
    }
    setUserData(data);
    const salesData = await Api.getAllSales(data.token);
    if (salesData.error.message === 'Expired or invalid token') {
      setLoading(false);
      return setRedirect(true);
    }
    setSales(salesData);
    setLoading(false);
  };

  useEffect(() => {
    setInitialInfos();
  }, []);

  if (redirect) return <Redirect to="/" />;

  if (loading) return <h1>Loading...</h1>;

  console.log(sales);

  return (
    <main>
      <NavBar role={ userData.role } />
      <section>
        {/* Aqui vai os cards de orders */}
      </section>
    </main>
  );
}

export default OrdersPage;
