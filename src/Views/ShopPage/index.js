import React from 'react';
import { Route } from 'react-router-dom';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Shared components
import { CollectionsOverview } from '../../components';
import CollectionPage from '../CollectionPage';

// Component styles
import styles from './styles';

const ShopPage = ({ match }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography
        style={{ marginBottom: '32px' }}
        className={classes.title}
        variant='h1'
      >
        Collections
      </Typography>

      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
