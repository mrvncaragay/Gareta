import React from 'react';
import { selectDirectorySections } from '../../redux/directory/selectors';

// External
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shared component
import { MenWomen, DenimJackets, TopsBottoms, Favorites } from './components';

// Component styles
import styles from './styles';

const Directory = ({ sections }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <DenimJackets height={800} sections={sections || []} />
      <TopsBottoms height={800} sections={sections || []} />
      <MenWomen height={600} sections={sections || []} />
      <Favorites height={600} sections={sections || []} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
