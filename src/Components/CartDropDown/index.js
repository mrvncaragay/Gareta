import React from 'react';

// External
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/selectors';

// Shared component
import CartItem from '../CartItem';

// Material UI component
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const CartDropDown = ({ cartItems }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.cartItems}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button variant='outlined'>Checkout</Button>
    </div>
  );
};

const mapToStateProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapToStateProps,
  null
)(CartDropDown);
