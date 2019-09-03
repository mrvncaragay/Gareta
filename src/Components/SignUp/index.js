import React, { useState } from 'react';

//Material UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Auth
import { auth, createUserProfileDocument } from '../../firebase/util';

// Component styles
import styles from './styles';

const SignUp = () => {
  const classes = styles();
  const initialState = {
    displayName: '',
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

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = state;
    if (password !== confirmPassword) {
      alert("Password word don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // Clear the form
      setState(initialState);
    } catch (error) {
      console.error(error);
    }
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
          name='displayName'
          required
          value={state.displayName}
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
          type='password'
          required
          label='Password'
          margin='normal'
          onChange={handleChange}
        />

        <TextField
          className={classes.password}
          fullWidth={true}
          name='confirmPassword'
          value={state.confirmPassword}
          type='password'
          required
          label='Confirm Password'
          margin='normal'
          onChange={handleChange}
        />

        <Button variant='outlined' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
