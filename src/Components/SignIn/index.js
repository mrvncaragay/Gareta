import React, { useState } from 'react';
import { signInWithGoogle } from '../../firebase/util';
//Material UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

  return (
    <div className={classes.root}>
      <Typography variant='h4'>I already have an account</Typography>
      <Typography component='span' variant='subtitle2'>
        Sign in with your email and password
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
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
          label='Password'
          name='password'
          value={state.password}
          required
          margin='normal'
          onChange={handleChange}
        />

        <Button variant='outlined' type='submit'>
          Sign in
        </Button>

        <Button onClick={signInWithGoogle} color='primary' variant='contained'>
          Sign in with google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
