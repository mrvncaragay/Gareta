import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 6, 6, 6),

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: theme.spacing(0, 2, 2, 2)
    }
  }
}));
