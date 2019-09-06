import React, { memo } from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

// Component styles
import styles from './styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CardMedia className={classes.cover} image={imageUrl} title={name} />
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

export default memo(CartItem);
