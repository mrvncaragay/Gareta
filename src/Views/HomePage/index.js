import React, { useEffect } from 'react';
import { fetchCategoriesStart } from '../../redux/directory/directoryActions';

// External
import { connect } from 'react-redux';

// Shared Component
import { Directory } from '../../components';

// Component styles
import styles from './styles';

const HomePage = ({ fetchCategoriesStart }) => {
  const classes = styles();

  useEffect(() => {
    fetchCategoriesStart();
  }, [fetchCategoriesStart]);

  return (
    <div className={classes.root}>
      <Directory />
    </div>
  );
};

export default connect(
  null,
  { fetchCategoriesStart }
)(HomePage);
