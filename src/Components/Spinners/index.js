import React from 'react';

// Shared component
import Spinner from './Spinner';

const Spinners = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default Spinners;
