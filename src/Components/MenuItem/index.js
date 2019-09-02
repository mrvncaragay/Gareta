import React from 'react';

import Typography from '@material-ui/core/Typography';

const MenuItem = ({ title }) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1'>Shop Now</Typography>
      </div>
    </div>
  );
};

export default MenuItem;
