import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';

// External
import { connect } from 'react-redux';

// Material UI component
// import Typography from '@material-ui/core/Typography';

// Shared components
import { CollectionsOverviewContainer } from '../../components';
import CollectionsPageContainer from '../CollectionPage/container';

// Component styles
import styles from './styles';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchCollectionsStart()

    // Clean up
    return () => {}
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

      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

export default connect(
  null,
  { fetchCollectionsStart }
)(ShopPage);
