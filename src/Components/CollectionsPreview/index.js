import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Shared component
import CollectionsItem from '../CollectionsItem';

// Component styles
import styles from './styles';

const CollectionsPreview = ({ title, items }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>
      <div className={classes.preview}>
        {items.slice(0, 4).map(({ id, ...rest }) => (
          <CollectionsItem key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
