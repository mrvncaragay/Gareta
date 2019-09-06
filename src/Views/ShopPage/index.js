import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';

// External
import { connect } from 'react-redux';

// Component styles
import styles from './styles';

// Lazy load shared components
import Spinner from '../../components/Spinners/Spinner';
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/container')
);
const CollectionsPageContainer = lazy(() =>
  import('../CollectionPage/container')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchCollectionsStart()

    // Clean up
    return () => {}
  }, [fetchCollectionsStart])
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(
  null,
  { fetchCollectionsStart }
)(ShopPage);
