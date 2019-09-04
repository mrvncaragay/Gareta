import React from 'react';

// External
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';

//Material UI component
import Badge from '@material-ui/core/Badge';
import BagIcon from '@material-ui/icons/LocalMallOutlined';

// Component styles
import styles from './styles.js';

const CartIcon = ({ toggleCartHidden }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color='secondary' onClick={toggleCartHidden}>
        <BagIcon />
      </Badge>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
