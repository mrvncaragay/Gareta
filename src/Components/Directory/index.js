import React from 'react';
import { selectDirectorySections } from '../../redux/directory/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import MenuItem from '../MenuItem';

// Component styles
import styles from './styles';

const Directory = ({ sections }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
