import React from 'react';
import { selectShopData } from '../../redux/shop/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared Component
import { CollectionsPreview } from '../../components';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const ShopPage = ({ shopData }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography
        style={{ marginBottom: '32px' }}
        className={classes.title}
        variant='h1'
      >
        Collections
      </Typography>
      {shopData.map(({ id, title, ...rest }) => (
        <CollectionsPreview key={id} title={title} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData
});

export default connect(mapStateToProps)(ShopPage);
