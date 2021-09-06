import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../context';
import paths from '../../Routes/paths';
import redirectByRole from '../../Routes/redirectByRole';

const HomePage = () => {
  const { auth: { isAuthenticated }, user } = useContext(AppContext);

  if (isAuthenticated) return redirectByRole(user.data.role);

  return <Redirect to={ paths.login } />;
};

export default HomePage;
