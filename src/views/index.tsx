import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../config/RoutingConfig';
import App from './app';

const Views: React.FC = () => {
  return (
    <Switch>
      <Route path={APP_PREFIX_PATH}>
        <App />
      </Route>
      <Redirect to={`${APP_PREFIX_PATH}`} />
    </Switch>
  );
};

export default Views;
