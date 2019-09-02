import React from 'react';
import { withRouter } from 'react-router-dom';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const classes = styles();

  return (
    <div
      className={`${classes.root} ${size}`}
      onClick={() => history.push(linkUrl)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={classes.backgroundImage}
      />

      <div className={classes.content}>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1'>Shop Now</Typography>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
