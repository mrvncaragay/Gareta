import React from 'react';

//Material UI component
import Badge from '@material-ui/core/Badge';
import BagIcon from '@material-ui/icons/LocalMallOutlined';

// Component styles
import styles from './styles.js';

const CartIcon = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color='secondary'>
        <BagIcon />
      </Badge>
    </div>
  );
};

export default CartIcon;
