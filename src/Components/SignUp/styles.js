import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    maxWidth: '400px',
    marginLeft: theme.spacing(6),

    '& h4': {
      marginBottom: theme.spacing(2)
    },

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3)
    }
  },

  form: {
    marginTop: theme.spacing(4)
  },

  password: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 2, 0)
    }
  },

  signUp: {
    width: '100%'
  }
}));
