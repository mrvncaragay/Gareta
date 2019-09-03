import React, { useState } from 'react';

//Material UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const SignUp = () => {
  const classes = styles();
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

  return (
    <div className={classes.root}>
      <Typography variant='h4'>I don't have an account</Typography>
      <Typography component='span' variant='subtitle2'>
        Sign up with your email and password
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          fullWidth={true}
          label='Display Name'
          name='email'
          type='email'
          required
          value={state.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth={true}
          label='Email'
          name='email'
          type='email'
          required
          value={state.email}
          onChange={handleChange}
        />

        <TextField
          className={classes.password}
          fullWidth={true}
          name='password'
          value={state.password}
          required
          label='Password'
          margin='normal'
        />

        <TextField
          className={classes.password}
          fullWidth={true}
          name='password'
          value={state.confirmPassword}
          required
          label='Confirm Password'
          margin='normal'
        />

        <Button variant='outlined' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
