import React from 'react';

// Component styles
import styles from './styles';

const MenuItemImage = ({ children, imageUrl, ...props }) => {
  const classes = styles(props);

  return (
    <div className={`${classes.root}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={classes.backgroundImage}
      />

      {children}
    </div>
  );
};

export default MenuItemImage;
