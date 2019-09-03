import React from 'react';

// Shared component
import { SignIn, SignUp } from '../../Components';

// Component styles
import styles from './styles';

const SignInUp = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
