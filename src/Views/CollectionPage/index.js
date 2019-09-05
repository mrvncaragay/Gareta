import React from 'react';
import { selectCollection } from '../../redux/shop/selectors';

// External
import { connect } from 'react-redux';

// Shared component
import { CollectionsItem } from '../../components';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const CollectionPage = ({ match, collection }) => {
  const classes = styles();

  const { title, items } = collection;

  return (
    <div className={classes.root}>
      <Typography
        style={{ marginBottom: '32px' }}
        className={classes.title}
        variant='h1'
      >
        {title}
      </Typography>

      <div className={classes.items}>
        {items.map(item => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
