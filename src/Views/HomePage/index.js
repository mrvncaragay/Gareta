import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchCategoriesStart } from '../../redux/directory/directoryActions';

// External
import { connect } from 'react-redux';

// Shared Component
import { Directory } from '../../components';

// Component styles
import styles from './styles';

const HomePage = ({ fetchCategoriesStart }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchCategoriesStart()

    // Clean up
    return () => {}
  }, [fetchCategoriesStart])
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <CSSTransition classNames='fade' in={true} appear={true} timeout={800}>
        <Directory />
      </CSSTransition>
    </div>
  );
};

export default connect(
  null,
  { fetchCategoriesStart }
)(HomePage);
