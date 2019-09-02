import React from 'react';

// Shared Component
import { Directory } from '../../Components';

// Component styles
import styles from './styles';

const ShopPage = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Directory />
    </div>
  );
};

export default ShopPage;
