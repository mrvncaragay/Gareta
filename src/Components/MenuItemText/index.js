import React from 'react';

// Component styles
import styles from './styles';

const MenuItemText = ({ children }) => {
  const classes = styles();

  return <div className={`${classes.root}`}>{children}</div>;
};

export default MenuItemText;
