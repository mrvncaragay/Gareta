import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 6, 6, 6),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 2, 2, 2)
    }
  }
}));
