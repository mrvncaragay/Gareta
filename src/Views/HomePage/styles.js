import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 6, 6, 6),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0)
    }
  },

  content: {
    border: '1px solid black',
    width: '100%',
    height: '100vh'
  }
}));
