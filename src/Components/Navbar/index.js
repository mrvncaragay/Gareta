import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/logo.svg';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Navbar = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Link to='/'>
        <Logo className={classes.logo} />
      </Link>

      <div className={classes.options}>
        <Link to='/' className={classes.option}>
          <Typography variant='h5'> SHOP</Typography>
        </Link>

        <Link to='/' className={classes.option}>
          <Typography variant='h5'> CONTACT</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
