import React from 'react';
import { clearItemFromCart } from '../../redux/cart/cartActions';

// External
import { connect } from 'react-redux';

// Material UI component
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CheckOutItem = ({ cartItem, clearItem }) => {
  const classes = styles();
  const { name, imageUrl, price, quantity } = cartItem;

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
      <div className={classes.removeBtn} onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
