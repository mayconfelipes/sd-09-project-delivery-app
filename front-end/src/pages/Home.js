import React from 'react';
import { Redirect } from 'react-router-dom';

const redirectPath = {
  administrator: <Redirect to="/admin/manage" />,
  seller: <Redirect to="/seller/orders" />,
  customer: <Redirect to="/customer/products" />,
};

function Home() {
  if (!localStorage.user) return <Redirect to="/login" />;

  const user = JSON.parse(localStorage.user);
  return redirectPath[user.role];
}

export default Home;
