import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { updateCollections } from '../../redux/shop/shopActions';

// External
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/util';
import { connect } from 'react-redux';

// Material UI component
// import Typography from '@material-ui/core/Typography';

// Shared components
import { CollectionsOverview, Spinners as WithSpinner } from '../../components';
import CollectionPage from '../CollectionPage';

// Component styles
import styles from './styles';

const CollectionOverViewPageWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const classes = styles();
  const [loading, setLoading] = useState(true);

  /* eslint-disable */
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionMap)

      setLoading(false);
    })
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
          <CollectionOverViewPageWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
