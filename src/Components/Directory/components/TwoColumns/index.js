import React from 'react';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import Image from '../Image';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const TwoColumns = ({ imageUrl, title }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Image imageUrl={imageUrl} />

      <div className={classes.title}>
        <Typography variant='h1'>{title}</Typography>
      </div>

      <div className={classes.actions}>
        <Button variant='outlined'>SHOP MEN</Button>
        <Button variant='outlined'>SHOP WOMEN</Button>
      </div>
    </div>
  );
};

export default TwoColumns;
