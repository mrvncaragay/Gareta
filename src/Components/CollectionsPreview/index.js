import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={`/shop/${title.toLowerCase()}`}>
        <Typography className={classes.title} variant='h2'>
          {title}
        </Typography>
      </Link>
      <div className={classes.preview}>
        {items.slice(0, 4).map(item => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
