import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppContext } from '../context';
import paths from './paths';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth: { isAuthenticated } } = useContext(AppContext);
  console.log('PrivateRoute', rest);

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
