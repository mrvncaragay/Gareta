import React from 'react';
import useIntersect from '../../../../hooks/useIntersect';

// Shared component
import MenuItem from '../../../MenuItem';

// Component styles
import styles from './styles';

const Main = ({ sections, ...props }) => {
  const classes = styles(props);
  const [ref, isIntersected] = useIntersect({
    /* Optional options */
    threshold: 0.2
  });

  return (
    <div
      className={`${classes.root} ${isIntersected ? 'slideIn' : 'slideOut'}`}
      ref={ref}
    >
      {sections
        .filter(section => section.title === 'women' || section.title === 'men')
        .map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
    </div>
  );
};

export default Main;
