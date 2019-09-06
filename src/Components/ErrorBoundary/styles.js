import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  ErrorImageOverlay: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ErrorImageContainer: {
    display: 'inline-block',
    backgroundImage: props => `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '40vh',
    height: '40vh'
  },

  ErrorImageText: {
    fontSize: theme.spacing(2),
    color: theme.palette.text.primary
  }
}));

export const ErrorImageOverlay = ({ children }) => {
  const classes = styles();

  return <div className={classes.ErrorImageOverlay}>{children}</div>;
};

export const ErrorImageContainer = props => {
  const classes = styles(props);
  return <div className={classes.ErrorImageContainer} />;
};

export const ErrorImageText = ({ children }) => {
  const classes = styles();

  return <h2 className={classes.ErrorImageText}>{children}</h2>;
};
