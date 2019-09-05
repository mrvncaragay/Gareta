import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Shared components
import { CollectionsOverview } from '../../components';

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

      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
