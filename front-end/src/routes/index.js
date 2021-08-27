import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
