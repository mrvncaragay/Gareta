import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop/selectors';

// External
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Shared Component
import CollectionsPreview from '../CollectionsPreview';

// Component styles
import styles from './styles';
const CollectionsOverview = ({ collections }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {collections.map(({ id, title, ...rest }) => (
        <CollectionsPreview key={id} title={title} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
