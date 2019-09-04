import React from 'react';

// Material UI component
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const CartDropDown = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.cartItems} />
      <Button variant='outlined'>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
