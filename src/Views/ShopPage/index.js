import React, { useState } from 'react';

// Dummy data
import shopData from '../../TestData/shop-data';

// Shared Component
import { CollectionsPreview } from '../../components';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const ShopPage = () => {
  const classes = styles();
  const [state] = useState(shopData);

  return (
    <div className={classes.root}>
      <Typography
        style={{ marginBottom: '32px' }}
        className={classes.title}
        variant='h1'
      >
        Collections
      </Typography>
      {state.map(({ id, title, ...rest }) => (
        <CollectionsPreview key={id} title={title} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;
