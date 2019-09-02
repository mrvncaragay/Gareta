import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

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
        {items.slice(0, 4).map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
