import React from 'react';
import { Redirect } from 'react-router-dom';
import paths from './paths';

const getRoleRoute = (role) => {
  switch (role) {
  case 'customer':
    return paths.customerProducts;
  case 'seller':
    return paths.customerProducts;
  case 'administrator':
    return paths.customerProducts;
  default:
    return paths.customerProducts;
  }
};

export default (role) => <Redirect to={ getRoleRoute(role) } />;
