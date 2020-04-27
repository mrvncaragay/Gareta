import React from 'react';
import { Link } from 'react-router-dom';
import useIntersect from '../../../../hooks/useIntersect';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Shared component
import Image from '../Image';

// Component styles
import styles from './styles';

const Favorites = ({ sections, ...props }) => {
  const classes = styles(props);

  const [ref, isIntersected] = useIntersect({
    /* Optional options */
    threshold: 0
  });

  return (
    <div
      className={`${classes.root} ${isIntersected ? 'slideIn' : 'slideOut'}`}
      ref={ref}
    >
      <div className={classes.textContainer}>
        <Typography variant='h1'>
          Do Fall in <em>New York</em>
        </Typography>
        <Typography variant='h4'>
          Classic denim & light layers to take
        </Typography>
        <Typography variant='h4'>you from downtown to upsate.</Typography>
        <Typography variant='caption'>#DoFreeLife</Typography>
      </div>

      <div className={classes.body}>
        {sections
          .filter(section => section.title === 'customers-faves')
          .map(({ imageUrl, id }) => (
            <Image key={id} width={20} imageUrl={imageUrl} />
          ))}
      </div>

      <div className={classes.action}>
        <Link to='#'>
          <Button variant='outlined'>SHOP CUSTOMER FAVES</Button>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
