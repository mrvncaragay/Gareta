import React, { useState } from 'react';

//Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const SignIn = () => {
  const classes = styles();
  const initialState = {
    email: '',
    password: ''
  };
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    const newState = { ...state };

    newState[e.target.name] = e.target.value;

    setState(newState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState(initialState);
  };

  console.log(state);

  return (
    <div className={classes.root}>
      <Typography variant='h4'>I already have an account</Typography>
      <Typography component='span' variant='subtitle2'>
        Sign in with your email and password
      </Typography>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='email'
          type='email'
          value={state.email}
          required
        />
        <label>Email</label>
        <input
          onChange={handleChange}
          name='password'
          type='password'
          value={state.password}
          required
        />
        <label>Password</label>

        <input type='submit' value='submit form' />
      </form>
    </div>
  );
};

export default SignIn;
