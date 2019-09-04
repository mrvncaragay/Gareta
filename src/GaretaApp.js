import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/selectors';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUp from './views/SignInUp';
import { Navbar } from './components';

// Auth
import { auth, createUserProfileDocument } from './firebase/util';

const GaretaApp = ({ currentUser, setCurrentUser }) => {
  /* eslint-disable */
  useEffect(() => {
    // Listed to Auth changed
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Create user or return user data if is already exists
        const userRef = await createUserProfileDocument(userAuth);

        // Store returned data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
          // userAuth is null when returned
          setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  /* eslint-enable */

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GaretaApp);
