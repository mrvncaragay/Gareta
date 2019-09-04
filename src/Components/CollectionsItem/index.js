import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const CollectionsItem = ({ name, price, imageUrl }) => {
  const classes = styles();

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

      <Button size='small' className={classes.button} variant='outlined'>
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionsItem;
