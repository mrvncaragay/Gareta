import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUp from './views/SignInUp';
import { Navbar } from './components';

// Auth
import { auth } from './firebase/util';

const GaretaApp = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      setCurrentUser(user)
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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
