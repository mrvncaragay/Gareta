import React from 'react';

// Material UI component
import CircularProgress from '@material-ui/core/CircularProgress';

// Component styles
import styles from './styles';

const Spinner = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
