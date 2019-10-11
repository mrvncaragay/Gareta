import React from 'react';
import useIntersect from '../../../../hooks/useIntersect';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import MenuItemImage from '../../../MenuItemImage';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const TITLE = ['Must-Have Denim', 'Need Now Jackets'];

const DenimJackets = ({ sections, ...props }) => {
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
      {sections
        .filter(
          section =>
            section.title === 'hats' || section.title === 'mens-jackets'
        )
        .map(({ id, title, imageUrl, ...rest }, i) => (
          <div className={classes.container} key={id}>
            <MenuItemImage key={id} imageUrl={imageUrl} />

            <div className={classes.title}>
              <Typography variant='h1'>{TITLE[i]}</Typography>
            </div>

            <div className={classes.actions}>
              <Button variant='outlined'>SHOP MEN</Button>
              <Button variant='outlined'>SHOP WOMEN</Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DenimJackets;
