import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUp from './views/SignInUp';
import { Navbar } from './components';

// Auth
import { auth, createUserProfileDocument } from './firebase/util';

const GaretaApp = ({ setCurrentUser }) => {
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
        <Route exact path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(GaretaApp);
