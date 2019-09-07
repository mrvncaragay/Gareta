import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = WrappedComponent => ({ ...otherProps }) => {
  return (
    <CSSTransition classNames='fade' in={true} appear={true} timeout={800}>
      <WrappedComponent {...otherProps} />
    </CSSTransition>
  );
};

export default Fade;
