import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to='/shop/jackets'>
          <Button variant='outlined'>SHOP MEN</Button>
        </Link>
        <Link to='/shop/jackets'>
          <Button variant='outlined'>SHOP WOMEN</Button>
        </Link>
      </div>
    </div>
  );
};

export default TwoColumns;
