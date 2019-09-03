import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUp from './views/SignInUp';
import { Navbar } from './Components';

const GaretaApp = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
};

export default GaretaApp;
