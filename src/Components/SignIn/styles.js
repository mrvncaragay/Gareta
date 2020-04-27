import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    maxWidth: '400px',
    marginRight: theme.spacing(6),

    '& h4': {
      marginBottom: theme.spacing(2)
    },

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3)
    }
  },

  form: {
    marginTop: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },

  password: {
    marginBottom: theme.spacing(4)
  },

  signIn: {
    color: '#5c676b',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 2, 0),
      padding: theme.spacing(1)
    }
  },

  google: {
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}));
