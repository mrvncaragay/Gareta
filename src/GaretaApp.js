import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared component
import HomePage from './Views/HomePage';
import ShopPage from './Views/ShopPage';

const GaretaApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
};

export default GaretaApp;
