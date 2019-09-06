import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import SignInUpPage from './views/SignInUpPage';
import CheckOutPage from './views/CheckOutPage';
import { Navbar } from './components';

const GaretaApp = ({ currentUser, setCurrentUser }) => {
  /* eslint-disable */
  useEffect(() => {
    // // Listed to Auth changed
    // const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     // Create user or return user data if is already exists
    //     const userRef = await createUserProfileDocument(userAuth);

    //     // Store returned data
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     // userAuth is null when returned
    //     setCurrentUser(userAuth);
    //   }
    // });

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GaretaApp);
