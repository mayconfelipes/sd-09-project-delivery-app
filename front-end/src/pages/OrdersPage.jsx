import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
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
    if (salesData.error
      && salesData.error.message === 'Expired or invalid token') {
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

  const mountProp = (role, sale) => ({
    role,
    ...sale,
  });

  return (
    <main>
      <NavBar role={ userData.role } />
      <section className="content-card-pedidos">
        {
          sales.map((sale) => (
            <OrderCard key={ sale.id } sale={ mountProp(userData.role, sale) } />
          ))
        }
      </section>
    </main>
  );
}

export default OrdersPage;
