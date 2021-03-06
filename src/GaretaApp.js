import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/selectors';
import { checkUserSession } from './redux/user/userActions';
import { fetchCategoriesStart } from './redux/directory/directoryActions';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import Spinner from './components/Spinners/Spinner';
import { Navbar, ErrorBoundary } from './components';

// Global styles
import styles from './GaretaAppStyles';

// Lazy load Shared component
const HomePage = lazy(() => import('./views/HomePage'));
const ShopPage = lazy(() => import('./views/ShopPage'));
const SignInUpPage = lazy(() => import('./views/SignInUpPage'));
const CheckOutPage = lazy(() => import('./views/CheckOutPage'));

const GaretaApp = ({ currentUser, checkUserSession, fetchCategoriesStart }) => {
  styles();

  /* eslint-disable */
  useEffect(() => {
    checkUserSession();
    fetchCategoriesStart();
  }, []);
  /* eslint-enable */

  return (
    <>
      <Navbar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, {
  checkUserSession,
  fetchCategoriesStart
})(GaretaApp);
