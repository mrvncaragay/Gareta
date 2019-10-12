import React from 'react';
import { Link } from 'react-router-dom';
import useIntersect from '../../../../hooks/useIntersect';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Shared component
import MenuItemImage from '../MenuItemImage';
import MenuItemText from '../MenuItemText';

// Component styles
import styles from './styles';

const MenWomen = ({ sections, ...props }) => {
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
      <MenuItemText>
        <Typography variant='h4'>Trend Now</Typography>
        <Typography variant='h1'>
          First Days of <em>fall</em>
        </Typography>
        <Typography variant='h4'>Key pieces for the new you.</Typography>
      </MenuItemText>

      {sections
        .filter(section => section.title === 'women' || section.title === 'men')
        .map(({ id, title, imageUrl, linkUrl }) => (
          <MenuItemImage key={id} imageUrl={imageUrl}>
            <Link to={linkUrl}>
              <Button variant='outlined'>Shop {title}</Button>
            </Link>
          </MenuItemImage>
        ))}
    </div>
  );
};

export default MenWomen;
