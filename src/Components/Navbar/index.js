import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/logo.svg';

// Redux
import { connect } from 'react-redux';

// Auth
import { auth } from '../../firebase/util';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Shared component
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropDown';

// Component styles
import styles from './styles';

const Navbar = ({ currentUser, cart }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Link to='/'>
        <Logo className={classes.logo} />
      </Link>

      <div className={classes.options}>
        <Link to='/shop' className={classes.option}>
          <Typography variant='h5'> SHOP</Typography>
        </Link>

        <Link to='/' className={classes.option}>
          <Typography variant='h5'> CONTACT</Typography>
        </Link>

        {currentUser ? (
          <Button
            size='small'
            className={classes.margin}
            onClick={() => auth.signOut()}
          >
            <Typography variant='h5'>Sign out</Typography>
          </Button>
        ) : (
          <Link to='/signin' className={classes.option}>
            <Typography variant='h5'>Sign in</Typography>
          </Link>
        )}

        <CartIcon />
      </div>
      {!cart.hidden && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cart: cart
});

export default connect(mapStateToProps)(Navbar);
