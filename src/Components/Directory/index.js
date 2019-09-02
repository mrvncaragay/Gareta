import React from 'react';

// Dummy data
import sections from '../../TestData/sections-data';

// Shared component
import MenuItem from '../MenuItem';

// Component styles
import styles from './styles';

const Directory = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
