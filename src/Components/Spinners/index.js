import React from 'react';

// Material UI component
import CircularProgress from '@material-ui/core/CircularProgress';

// Component styles
import styles from './styles';

const Spinners = WrappedComponent => ({ isLoading, ...otherProps }) => {
  const classes = styles();

  return isLoading ? (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default Spinners;
