import React from 'react';
import { Link } from 'react-router-dom';

// External
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/selectors';

// Shared component
import CartItem from '../CartItem';
import { toggleCartHidden } from '../../redux/cart/cartActions';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CartDropDown = ({ cartItems, dispatch }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.cartItems}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <Typography
            className={classes.empty}
            component='span'
            variant='subtitle2'
          >
            Your cart is empty
          </Typography>
        )}
      </div>

      <Link to='/checkout' onClick={() => dispatch(toggleCartHidden())}>
        <Button variant='outlined' className={classes.checkOut}>
          Checkout
        </Button>
      </Link>
    </div>
  );
};

const mapToStateProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapToStateProps)(CartDropDown);
