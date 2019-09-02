import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CollectionsItem = ({ id, name, price, imageUrl }) => {
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
    </div>
  );
};

export default CollectionsItem;
