import React from 'react';
import useIntersect from '../../../../hooks/useIntersect';

// Shared component
import TwoColumns from '../TwoColumns';

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
            section.title === 'womens-jeans' || section.title === 'mens-coats'
        )
        .map(({ id, imageUrl }, i) => (
          <TwoColumns key={id} imageUrl={imageUrl} title={TITLE[i]} />
        ))}
    </div>
  );
};

export default DenimJackets;
