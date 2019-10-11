import React from 'react';
import useIntersect from '../../../../hooks/useIntersect';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Shared component
import MenuItemImage from '../../../MenuItemImage';
import MenuItemButton from '../../../MenuItemButton';
import MenuItemText from '../../../MenuItemText';

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
        .map(({ id, title, imageUrl, ...rest }) => (
          <MenuItemImage key={id} imageUrl={imageUrl}>
            <MenuItemButton type='outlined' title={`shop ${title}`} {...rest} />
          </MenuItemImage>
        ))}
    </div>
  );
};

export default MenWomen;
