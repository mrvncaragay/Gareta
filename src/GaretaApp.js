import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared component
import HomePage from './Views/HomePage';
import ShopPage from './Views/ShopPage';
import { Navbar } from './Components';

const GaretaApp = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default GaretaApp;
