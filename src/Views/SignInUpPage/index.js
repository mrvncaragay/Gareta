import React from 'react';

// Shared component
import { SignIn, SignUp } from '../../components';

// Component styles
import styles from './styles';

const SignInUpPage = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUpPage;
