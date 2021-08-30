import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../Services/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
    )) }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.string.isRequired,
};
