import React from 'react';

// Shared Component
import { Directory } from '../../components';

// Component styles
import styles from './styles';

const HomePage = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Directory />
    </div>
  );
};

export default HomePage;
