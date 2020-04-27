import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { signOutStart } from '../../redux/user/userActions';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Shared component
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropDown';

// Component styles
import styles from './styles';

const Navbar = ({ currentUser, hidden, signOutStart }) => {
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

        {/* <Link to='/' className={classes.option}>
          <Typography variant='h5'> CONTACT</Typography>
        </Link> */}

        {currentUser ? (
          <Button
            size='small'
            className={classes.margin}
            onClick={signOutStart}
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
      {!hidden && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, { signOutStart })(Navbar);
