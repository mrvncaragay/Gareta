import React, { useState } from 'react';

// Dummy data
import shopData from '../../TestData/shop-data';

// Shared Component
import { CollectionsPreview } from '../../components';

// Component styles
import styles from './styles';

const ShopPage = () => {
  const classes = styles();
  const [state] = useState(shopData);

  return (
    <div className={classes.root}>
      {state.map(({ id, title, ...rest }) => (
        <CollectionsPreview key={id} title={title} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;