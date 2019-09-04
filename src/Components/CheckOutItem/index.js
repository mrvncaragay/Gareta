import React from 'react';

// Material UI component
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CardMedia className={classes.img} image={imageUrl} title={name} />
      <Typography component='span' variant='subtitle2'>
        {name}
      </Typography>
      <Typography component='span' variant='subtitle2'>
        {quantity}
      </Typography>
      <Typography component='span' variant='subtitle2'>
        {price}
      </Typography>
      <div className={classes.removeBtn}>&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
