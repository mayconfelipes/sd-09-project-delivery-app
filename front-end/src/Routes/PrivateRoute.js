import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import paths from './paths';
import { useAuthDataContext } from '../context/contexts';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthDataContext();

  return (
    <Route
      { ...rest }
      render={ (props) => (isAuthenticated ? (
        <Component { ...props } />
      ) : (
        <Redirect to={ { pathname: paths.login, state: { from: props.location } } } />
      )) }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.string.isRequired,
};
