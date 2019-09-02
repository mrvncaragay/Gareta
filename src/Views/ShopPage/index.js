import React, { useState } from 'react';

// Dummy data
import shopData from '../../TestData/shop-data';

// Shared Component
import { CollectionsPreview } from '../../Components';

// Component styles
import styles from './styles';

const ShopPage = () => {
  const classes = styles();
  const [state] = useState(shopData);

  return (
    <>
      {state.map(({ id, title, ...rest }) => (
        <CollectionsPreview key={id} title={title} {...rest} />
      ))}
    </>
  );
};

export default ShopPage;
