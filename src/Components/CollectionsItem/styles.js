import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '22vw',
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    alignItems: 'center',
    position: 'relative',
    marginBottom: theme.spacing(4),

    '&:hover $button': {
      display: 'flex'
    }
  },

  image: {
    width: '100%',
    height: '95%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1),

    '&:hover': {
      opacity: 0.7
    }
  },

  footer: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'space-between'
  },

  button: {
    position: 'absolute',
    opacity: '0.7',
    top: '75%',
    padding: '10px 16px 10px 16px',
    fontSize: '10px',
    border: 'none',
    display: 'none',

    '&:hover': {
      opacity: '1'
    }
  }
}));
