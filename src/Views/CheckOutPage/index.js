import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import { CheckOutItem } from '../../components';

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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
