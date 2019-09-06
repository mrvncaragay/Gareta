import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/selectors';
import { checkUserSession } from './redux/user/userActions';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUpPage from './views/SignInUpPage';
import CheckOutPage from './views/CheckOutPage';
import { Navbar } from './components';

const GaretaApp = ({ currentUser, checkUserSession }) => {
  /* eslint-disable */
  useEffect(() => {
    checkUserSession()
    // return () => {
    //   unsubscribeFromAuth();
    // };
  }, []);
  /* eslint-enable */

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInUpPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { checkUserSession }
)(GaretaApp);
