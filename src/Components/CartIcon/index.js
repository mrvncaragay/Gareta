import React from 'react';

// External
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';

//Material UI component
import Badge from '@material-ui/core/Badge';
import BagIcon from '@material-ui/icons/LocalMallOutlined';

// Component styles
import styles from './styles.js';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Badge
        badgeContent={itemCount}
        color='secondary'
        onClick={toggleCartHidden}
      >
        <BagIcon />
      </Badge>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
