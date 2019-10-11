import React from 'react';
import { withRouter } from 'react-router-dom';

// Material UI component
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const MenuItemButton = ({ title, history, linkUrl, type, ...props }) => {
  const classes = styles(props);

  return (
    <div className={classes.root}>
      <Button variant={type} onClick={() => history.push(linkUrl)}>
        {title}
      </Button>
    </div>
  );
};

export default withRouter(MenuItemButton);
