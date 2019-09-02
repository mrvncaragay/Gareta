import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const MenuItem = ({ title, imageUrl, size }) => {
  const classes = styles();

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${classes.root} ${size}`}
    >
      <div className={classes.content}>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1'>Shop Now</Typography>
      </div>
    </div>
  );
};

export default MenuItem;
