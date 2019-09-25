import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import { CheckOutItem, StripeButton } from '../../components';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component style
import styles from './styles';

const CheckOutPage = ({ cartItems, total }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.checkOutHeader}>
        <div className={classes.headerBlock}>
          <Typography component='span' variant='subtitle2'>
            Product
          </Typography>
        </div>

        <div className={classes.headerBlock}>
          <Typography component='span' variant='subtitle2'>
            Description
          </Typography>
        </div>

        <div className={classes.headerBlock}>
          <Typography component='span' variant='subtitle2'>
            Quantity
          </Typography>
        </div>

        <div className={classes.headerBlock}>
          <Typography component='span' variant='subtitle2'>
            Price
          </Typography>
        </div>

        <div className={classes.headerBlock}>
          <Typography component='span' variant='subtitle2'>
            Remove
          </Typography>
        </div>
      </div>

      {cartItems.map(item => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}

      <div className={classes.total}>
        <Typography component='span' variant='h2'>
          TOTAL: ${total}
        </Typography>
      </div>

      <div className={classes.testWarning}>
        *Please use the following test credit card for payments.*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV:123
      </div>

      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
