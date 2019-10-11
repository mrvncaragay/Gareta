import React from 'react';
import { selectDirectorySections } from '../../redux/directory/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import { Main } from './components';

// Component styles
import styles from './styles';

const Directory = ({ sections }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Main height={600} sections={sections} />
      <div style={{ height: '100vh' }}>content 1</div>
      <div style={{ height: '100vh' }}>content 2</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
