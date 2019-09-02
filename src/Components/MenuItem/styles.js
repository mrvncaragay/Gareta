import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    minWidth: '30%',
    height: '240px',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 1, 2, 2),
    // Image style
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    '&.large': {
      height: '380px'
    },

    '&:first-child': {
      marginRight: theme.spacing(1)
    },

    '&:last-child': {
      marginLeft: theme.spacing(1)
    }
  },

  content: {
    height: '90px',
    padding: theme.spacing(0, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black'
  }
}));
