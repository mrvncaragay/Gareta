import React from 'react';

// External
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const CollectionsItem = ({ item, addItem }) => {
  const classes = styles();
  const { name, price, imageUrl } = item;

  return (
    <div className={classes.root}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className={classes.footer}>
        <Typography component='span' variant='subtitle2'>
          {name}
        </Typography>
        <Typography component='span' variant='subtitle2'>
          ${price}
        </Typography>
      </div>

      <Button
        size='small'
        className={classes.button}
        variant='outlined'
        onClick={() => addItem(item)}
      >
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionsItem);
