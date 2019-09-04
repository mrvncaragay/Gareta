import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <img src={imageUrl} alt='item' />
      <div className={classes.itemDetails}>
        <Typography component='span' variant='subtitle2'>
          {name}
        </Typography>
        <Typography component='span' variant='subtitle2'>
          {quantity} x ${price}
        </Typography>
      </div>
    </div>
  );
};

export default CartItem;
