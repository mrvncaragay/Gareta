import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { selectIsCollectionFetching } from '../../redux/shop/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Material UI component
// import Typography from '@material-ui/core/Typography';

// Shared components
import { CollectionsOverview, Spinners as WithSpinner } from '../../components';
import CollectionPage from '../CollectionPage';

// Component styles
import styles from './styles';

const CollectionOverViewPageWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isCollectionFetching,
  fetchCollectionsStartAsync
}) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchCollectionsStartAsync()

    return () => {

    }
  }, [])
  /* eslint-enable */

  return (
    <div className={classes.root}>
      {/* <Typography
        style={{ marginBottom: '32px' }}
        className={classes.title}
        variant='h1'
      >
        Collections
      </Typography> */}

      <Route
        exact
        path='/shop'
        render={props => (
          <CollectionOverViewPageWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// });

export default connect(
  mapStateToProps,
  { fetchCollectionsStartAsync }
)(ShopPage);
