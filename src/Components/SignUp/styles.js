import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    maxWidth: '400px',
    marginLeft: theme.spacing(6),

    '& h4': {
      marginBottom: theme.spacing(2)
    }
  },

  form: {
    marginTop: theme.spacing(4)
  },

  password: {
    marginBottom: theme.spacing(4)
  }
}));
