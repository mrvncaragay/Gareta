import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared component
import HomePage from './Views/HomePage';

const GaretaApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
};

export default GaretaApp;
